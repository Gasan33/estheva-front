import { Skeleton } from "../ui/skeleton";

const ExploreTreatmentSkeleton = () => {
    return (
        <div className="w-full flex flex-col gap-4">
            <Skeleton className="h-6 w-3/4" />

            <div className="flex flex-col xl:flex-row gap-4">
                {/* Skeleton Image */}
                <div className="relative h-64 md:h-96 w-full xl:w-1/2">
                    <Skeleton className="absolute top-0 left-0 w-[95%] h-[95%] rounded-lg z-10" />
                    <Skeleton className="absolute bottom-0 right-0 w-[85%] h-[85%] rounded-lg z-0" />
                </div>

                {/* Skeleton Text */}
                <div className="space-y-3 xl:w-1/2 mt-4 xl:mt-0">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>
            </div>

            <div className="flex gap-4 mt-4">
                <Skeleton className="h-8 w-32 rounded-md" />
                <Skeleton className="h-8 w-40 rounded-md" />
            </div>
        </div>
    );
};

export { ExploreTreatmentSkeleton };
