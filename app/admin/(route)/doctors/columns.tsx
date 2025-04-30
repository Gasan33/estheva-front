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
import { imageFormater } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"



async function handelDelete(id: number): Promise<void> {
    try {
        const response = await fetch(`/api/admin/doctors/remove/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Failed to delete Team Member`);
        }
        toast({ title: "Team Member Deleted Successfuly" });
    } catch (error) {
    }
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
        cell: ({ row }) => {
            const doctor = row.original
            return <Image
                src={doctor.user.profile_picture ? imageFormater(doctor.user.profile_picture) : "/images/noavatar.png"}
                alt={doctor.user.name ?? "user"}
                width={300}
                height={300}
                style={{ height: "56px", width: "56px" }}
                className="rounded-full w-14 h-14 object-cover"
            />
        },
    },
    {
        accessorKey: "title",
        accessorFn: ({ user: { first_name, last_name } }) => first_name.toString() + " " + last_name.toString(),
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
        accessorKey: "user.email",
        header: "Email",
    },
    {
        accessorKey: "user.phone_number",
        header: "Phone Number",
    },
    {
        accessorKey: "specialty",
        header: "Specialty",
    },
    {
        accessorKey: "addresses[0].address_line_1",
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
                        <Link href={`/admin/treatments/show/${doctor.id}`}> <DropdownMenuItem>View Doctor details</DropdownMenuItem></Link>
                        <Link href={`/admin/doctors/edit/${doctor.id}`}><DropdownMenuItem>Edit Doctor</DropdownMenuItem></Link>
                        <DropdownMenuItem onClick={() => handelDelete(doctor.id)}>Delete Doctor</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
