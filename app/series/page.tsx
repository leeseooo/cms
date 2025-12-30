
import { DataTable } from '../components/data-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

async function getSeriesList() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/series`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch series');
    }

    return res.json();
}


export default async function SeriesPage() {
    const data = await getSeriesList();

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">시리즈 관리</h1>
                <Link href="/series/create">
                    <Button>새 시리즈 만들기</Button>
                </Link>
            </div>
            <DataTable data={data} />
        </div>
    );
}
