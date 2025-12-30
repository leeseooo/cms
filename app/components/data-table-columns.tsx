import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';

export function getSeriesColumns<TData>(): ColumnDef<TData>[] {
    return [
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
            filterFn: 'equals',
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
}
