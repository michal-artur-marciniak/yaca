import { protectedProcedure, createTRPCRouter } from "@/trpc/init";
import { generateSlug } from "random-word-slugs";
import prisma from "@/lib/db";
import { z } from "zod";
import { inngest } from "@/inngest/client";
import { TRPCError } from "@trpc/server";
import { consumeCredits } from "@/lib/usage";

export const projectsRouter = createTRPCRouter({
    getById: protectedProcedure
        .input(z.object({ id: z.string().min(1, "Project id is required") }))
        .query(async ({ input, ctx }) => {
            const project = await prisma.project.findUnique({
                where: {
                    id: input.id,
                    userId: ctx.auth.userId,
                },
            });

            if (!project) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Project not found",
                });
            }

            return project;
        }),
    getMany: protectedProcedure
        .query(async ({ ctx }) => {
            const projects = await prisma.project.findMany({
                where: {
                    userId: ctx.auth.userId,
                },
                orderBy: {
                    updatedAt: "desc",
                },
            });
            return projects;
        }),
    create: protectedProcedure
        .input(
            z.object({
                value: z.string()
                    .min(1, "Prompt is required")
                    .max(10000, "Prompt is too long"),
            }),
        )
        .mutation(async ({ input, ctx }) => {
            try {
                await consumeCredits();
            } catch (error) {
                if (error instanceof Error) {
                    throw new TRPCError({
                        code: "BAD_REQUEST",
                        message: "Something went wrong",
                    })
                } else {
                    throw new TRPCError({
                        code: "TOO_MANY_REQUESTS",
                        message: "You have run out of credits",
                    })
                }
            }

            const project = await prisma.project.create({
                data: {
                    userId: ctx.auth.userId,
                    name: generateSlug(2, { format: "kebab" }),
                    messages: {
                        create: {
                            content: input.value,
                            role: "USER",
                            type: "RESULT",
                        },
                    },
                },
            });

            await inngest.send({
                name: "code-agent/run",
                data: {
                    value: input.value,
                    projectId: project.id,
                }
            })

            return project;
        })
});
