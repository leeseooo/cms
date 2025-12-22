'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
    const pathname = usePathname();

    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbs = [
        { name: '홈', path: '/' },
        ...pathSegments.map((segment, index) => {
            const path = '/' + pathSegments.slice(0, index + 1).join('/');
            const name = segment.charAt(0).toUpperCase() + segment.slice(1);
            return { name, path };
        }),
    ];

    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            {breadcrumbs.map((crumb, index) => (
                <div key={crumb.path} className="flex items-center">
                    {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                    {index === breadcrumbs.length - 1 ? (
                        <span className="font-semibold text-gray-900">{crumb.name}</span>
                    ) : (
                        <Link
                            href={crumb.path}
                            className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                            {crumb.name}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
