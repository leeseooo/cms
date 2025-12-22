import Sidebar from './side-bar';
import Breadcrumb from './bread-crumb';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />

            <main className="flex-1 p-8">
                <Breadcrumb />

                <div className="bg-white rounded-lg shadow-sm p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}
