import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const CancelAppointmentDailog = () => {
    return (
        <Dialog>
            <DialogTrigger className='outline outline-1 rounded-md w-full py-2 text-sm outline-teal-500 text-teal-500 font-thin'>Cancel</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default CancelAppointmentDailog