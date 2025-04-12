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
import Link from "next/link"




export const columns: ColumnDef<Treatment>[] = [
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
            const treatment = row.original
            return <Image
                src={treatment.images[0]}
                alt={row.getValue("title")}
                width={300}
                height={300}
                style={{ height: "auto" }}
                className="rounded-full w-14 h-auto"
            />
        },
    },
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "category.category_name",
        header: "Category",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const treatment = row.original

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
                            onClick={() => navigator.clipboard.writeText(`${treatment.id}`)}
                        >
                            Copy Treatment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Treatment details</DropdownMenuItem>
                        <Link href={`/admin/treatments/edit/${treatment.id}`}><DropdownMenuItem>Edit Treatment</DropdownMenuItem></Link>
                        <DropdownMenuItem >Delete Treatment</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
