'use client';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    SortingState,
    getSortedRowModel,
} from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

interface DataTableProps<TData, _> {
    data: TData[];
}

export function DataTable<TData, TValue>({
    data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([
        { desc: true, id: 'createdAt' }
    ]);

    const columns: ColumnDef<TData>[] = [
        {
            accessorKey: 'title',
            header: '제목',
        },
        {
            accessorKey: 'description',
            header: '설명',
        },
        {
            accessorKey: 'episodeCount',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        에피소드 수
                        <ArrowUpDown />
                    </Button>
                )
            },
            cell: ({ row }) => {
                return <div className="text-center">{row.getValue('episodeCount')}</div>;
            },
        },
        {
            accessorKey: 'status',
            header: '상태',
            cell: ({ row }) => {
                const status = row.getValue('status') as string;
                const statusMap = {
                    active: { label: '활성', variant: 'default' as const },
                    inactive: { label: '비활성', variant: 'secondary' as const },
                    draft: { label: '초안', variant: 'outline' as const },
                };
                const statusInfo = statusMap[status as keyof typeof statusMap];
                return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
            },
        },
        {
            accessorKey: 'createdAt',
            header: '생성일',
            cell: ({ row }) => {
                const date = new Date(row.getValue('createdAt'));
                return <div>{date.toLocaleDateString('ko-KR')}</div>;
            },
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
    });

    return (
        <div className="space-y-4">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && 'selected'}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    데이터가 없습니다.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    이전
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    다음
                </Button>
            </div>
        </div>
    );
}
