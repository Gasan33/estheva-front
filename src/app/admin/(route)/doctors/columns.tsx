import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

import Image from "next/image"
import { deleteDoctor } from "@/services/admin/doctors"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Doctor = {
    id: number
    image: string
    title: string
    email: string
    phone_number: string
    specialty: string
    address: string
}


async function handelDelete(id: number): Promise<void> {

    deleteDoctor(id);
}

export const columns: ColumnDef<Doctor>[] = [
    {
        id: "id",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({ row }) => (
            <Image
                src={row.getValue("image")}
                alt={row.getValue("title")}
                fill
                sizes="40"
                className="rounded-full w-14 h-14"
            />
        ),
    },
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone_number",
        header: "Phone Number",
    },
    {
        accessorKey: "specialty",
        header: "Specialty",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const doctor = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(`${doctor.id}`)}
                        >
                            Copy Doctor ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Doctor details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Doctor</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handelDelete(doctor.id)}>Delete Doctor</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
