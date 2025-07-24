import { AlertTriangleIcon, RefreshCcwIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorFallbackProps {
    title?: string;
    description?: string;
    showRetry?: boolean;
    onRetry?: () => void;
    className?: string;
}

export const ErrorFallback = ({
    title = "Something went wrong",
    description = "An unexpected error occurred. Please try again later.",
    showRetry = false,
    onRetry,
    className,
}: ErrorFallbackProps) => {
    return (
        <Alert variant="destructive" className={className}>
            <AlertTriangleIcon />
            <AlertTitle className="font-semibold">{title}</AlertTitle>
            <AlertDescription className="space-y-3">
                <p>{description}</p>
                {showRetry && onRetry && (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onRetry}
                        className="bg-background hover:bg-accent"
                    >
                        <RefreshCcwIcon className="size-3" />
                        Try again
                    </Button>
                )}
            </AlertDescription>
        </Alert>
    );
}; 