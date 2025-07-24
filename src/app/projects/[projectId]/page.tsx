import { ProjectView } from "@/modules/projects/ui/views/project-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error-fallback";

interface Props {
    params: Promise<{
        projectId: string;
    }>
}

const Page = async ({ params }: Props) => {
    const { projectId } = await params;

    const queryClient = getQueryClient()
    void queryClient.prefetchQuery(trpc.messages.getMany.queryOptions({
        projectId,
    }));
    void queryClient.prefetchQuery(trpc.projects.getById.queryOptions({
        id: projectId,
    }));

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ErrorBoundary fallback={
                <div className="min-h-screen flex items-center justify-center">
                    <div className="absolute inset-0 -z-10 h-full w-full bg-background
                        dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)]
                        bg-[radial-gradient(#dadde2_1px,transparent_1px)] 
                        [background-size:16px_16px]
                        "/>
                    <div className="px-4 pb-4">
                        <div className="max-w-2xl mx-auto">
                            <ErrorFallback
                                title="Project unavailable"
                                description="We couldn't load this project. Please check if the project exists and try again."
                                showRetry={true}
                                onRetry={() => window.location.reload()}
                            />
                        </div>
                    </div>
                </div>
            }>
                <Suspense fallback={<div>Loading...</div>}>
                    <ProjectView projectId={projectId} />
                </Suspense>
            </ErrorBoundary>
        </HydrationBoundary>
    );
};

export default Page;
