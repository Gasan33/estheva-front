import AppointmentsList from '@/components/common/AppointmentsList';
import ViewAllText from '@/components/common/ViewAllText';
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='mt-8'>

                <ViewAllText href='' title='Upcoming Appointments' />

                {/* <AppointmentsList /> */}
            </div>
        </div>
        // <>
        //     <form action={async () => {
        //         "use server";
        //         await signOut();
        //     }}
        //         className='mb-10'
        //     >
        //         <Button>Logout</Button>
        //     </form>
        //     <BookList title='Borrowed Books' books={sampleBooks} />
        // </>
    )
}

export default page