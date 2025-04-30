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
import { toast } from "@/hooks/use-toast"
import Link from "next/link"



async function handelDelete(id: number): Promise<void> {
    try {
        const response = await fetch(`/api/admin/blogs/remove/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Failed to delete blog`);
        }
        toast({ title: "blog Deleted Successfuly" });
    } catch (error) {
    }
}


export const columns: ColumnDef<Blog>[] = [
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
            const blog = row.original
            return <Image
                src={row.getValue("image")}
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
        accessorKey: "short_description",
        header: "Description",
    },
    {
        accessorKey: "created_at",
        header: "Created at",
    },
    // {
    //     accessorKey: "description",
    //     header: "Description",
    // },
    {
        id: "actions",
        cell: ({ row }) => {
            const blog = row.original

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
                            onClick={() => navigator.clipboard.writeText(`${blog.id}`)}
                        >
                            Copy Blog ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <Link href={`/admin/blogs/show/${blog.id}`}> <DropdownMenuItem>View Blog details</DropdownMenuItem></Link>
                        <Link href={`/admin/blogs/edit/${blog.id}`}> <DropdownMenuItem>Edit Blog</DropdownMenuItem></Link>
                        <DropdownMenuItem onClick={() => handelDelete(blog.id)}>Delete Blog</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
