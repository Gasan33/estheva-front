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
import { toast } from "@/hooks/use-toast"
import AddTreatmentDiscount from "@/components/dialogs/AddTreatmentDiscount"


async function handelDelete(id: number): Promise<void> {
    try {
        const response = await fetch(`/api/admin/treatments/remove/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Failed to delete treatment`);
        }
        toast({ title: "Treatment Deleted Successfuly" });
    } catch (error) {
    }
}

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
                style={{ height: "56px", width: "56px" }}
                className="rounded-full w-14 h-14 object-cover"
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
        cell: ({ row }) => {
            const description = row.getValue("description") as string;

            return (
                <p className="line-clamp-3 text-sm text-muted-foreground">
                    {description}
                </p>
            );
        },
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
                        <Link href={`/admin/treatments/show/${treatment.id}`}><DropdownMenuItem>View Treatment details</DropdownMenuItem></Link>
                        {/* <DropdownMenuItem asChild>
                            <AddTreatmentDiscount id={treatment.id} />
                        </DropdownMenuItem> */}
                        <Link href={`/admin/treatments/edit/${treatment.id}`}><DropdownMenuItem>Edit Treatment</DropdownMenuItem></Link>
                        <DropdownMenuItem onClick={() => handelDelete(treatment.id)}>Delete Treatment</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
