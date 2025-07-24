"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      {/* Same background pattern as home page */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background
            dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)]
            bg-[radial-gradient(#dadde2_1px,transparent_1px)] 
            [background-size:16px_16px]
            "/>

      <div className="flex-1 flex items-center justify-center px-4 pb-4">
        <div className="flex flex-col max-w-2xl mx-auto w-full">
          <div className="flex flex-col items-center space-y-6">
            <Image
              src="/logo.svg"
              alt="YACA"
              width={50}
              height={50}
              className="opacity-50"
            />

            <h1 className="text-2xl md:text-5xl font-bold text-center">
              Something went wrong
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl">
              We encountered an unexpected error. Please try refreshing the page or go back to the home page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => window.location.reload()}
                variant="default"
                size="lg"
              >
                Try Again
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
              >
                <Link href="/">
                  <HomeIcon className="w-4 h-4" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
