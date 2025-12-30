import { Table } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, X } from 'lucide-react';

interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;
    const statusFilterValue = table.getColumn('status')?.getFilterValue() as string;

    const getStatusLabel = (value: string | undefined) => {
        if (!value) return '모든 상태';
        const statusMap: Record<string, string> = {
            active: '활성',
            inactive: '비활성',
            draft: '초안',
        };
        return statusMap[value] || '모든 상태';
    };

    return (
        <div className="flex items-center gap-4">
            <Input
                placeholder="제목으로 검색..."
                value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
                onChange={(event) =>
                    table.getColumn('title')?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
            />

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="min-w-35 justify-between">
                        {getStatusLabel(statusFilterValue)}
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem
                        onClick={() => table.getColumn('status')?.setFilterValue(undefined)}
                    >
                        모든 상태
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => table.getColumn('status')?.setFilterValue('active')}
                    >
                        활성
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => table.getColumn('status')?.setFilterValue('inactive')}
                    >
                        비활성
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => table.getColumn('status')?.setFilterValue('draft')}
                    >
                        초안
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {isFiltered && (
                <Button
                    variant="ghost"
                    onClick={() => table.resetColumnFilters()}
                    className="h-10 px-2 lg:px-3"
                >
                    필터 초기화
                    <X className="ml-2 h-4 w-4" />
                </Button>
            )}
        </div>
    );
}
