import { ArrowRight01Icon } from 'hugeicons-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BookAppointment from '../common/BookAppointment/BookAppointment';
import SignInDialog from '../dialogs/SignInDialog';
import { useSession } from 'next-auth/react';
import { Skeleton } from "@/components/ui/skeleton";
import { ExploreTreatmentSkeleton } from '../skeletons/ExploreTreatmentSkeleton';

type Props = {
    treatment: Treatment;
    loading?: boolean;
};

const ExploreTreatment = ({ treatment, loading = false }: Props) => {
    const { data: session } = useSession();

    if (loading) return <ExploreTreatmentSkeleton />;

    return (
        <div className="relative w-full flex flex-col gap-4">
            <h1 className="text-gray-900 text-xl font-semibold line-clamp-1">
                {treatment.title}
            </h1>

            {/* Image + Description */}
            <div className="flex flex-col xl:flex-row gap-4">
                {/* Image */}
                <div className="relative h-64 md:h-96 w-full xl:w-1/2">
                    <Image
                        src="/images/explore-bg.jpg"
                        alt="background"
                        width={200}
                        height={200}
                        className="absolute bottom-0 right-0 w-[85%] h-[85%] rounded-lg object-cover z-0"
                    />
                    <Image
                        src={treatment.images[0]}
                        alt={treatment.title}
                        width={200}
                        height={200}
                        className="absolute top-0 left-0 w-[95%] h-[95%] rounded-lg object-cover z-10"
                    />
                </div>

                {/* Description */}
                <p
                    className="text-sm overflow-scroll h-[400px] text-gray-700 xl:w-1/2"
                    dangerouslySetInnerHTML={{ __html: treatment.description }}
                />
            </div>

            {/* Actions */}
            <div className="flex gap-4 mt-4 items-center">
                <Link
                    href={`/treatments/${treatment.id}`}
                    className="flex items-center gap-1 text-xs md:text-sm font-medium text-primaryColor hover:underline transition-all"
                >
                    View Details
                    <ArrowRight01Icon className="h-4 md:h-5" />
                </Link>

                {session?.user ? (
                    <BookAppointment treatment={treatment} triger="home" />
                ) : (
                    <SignInDialog />
                )}
            </div>
        </div>
    );
};

export default ExploreTreatment;
