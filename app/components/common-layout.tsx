import AppSidebar from './side-bar';
import Breadcrumb from './bread-crumb';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-gray-50 w-full">
                <AppSidebar />

                <main className="flex-1 p-8">
                    <div className="mb-4">
                        <SidebarTrigger />
                    </div>
                    <Breadcrumb />

                    <div className="bg-white rounded-lg shadow-sm p-6">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}
