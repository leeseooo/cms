'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    { name: '홈', path: '/', icon: '🏠' },
    { name: '대시보드', path: '/home', icon: '📊' },
    { name: '사용자 관리', path: '/users', icon: '👥' },
    { name: '설정', path: '/settings', icon: '⚙️' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Zero CMS</h1>
            </div>

            <nav>
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-800'
                                        }`}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
                <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400">© 2025 CMS</p>
                </div>
            </div>
        </aside>
    );
}
