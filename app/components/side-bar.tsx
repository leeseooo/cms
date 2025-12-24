'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    SidebarFooter,
} from '@/components/ui/sidebar';
import { Home, FileText, List, Package } from 'lucide-react';

const menuItems = [
    {
        name: '콘텐츠',
        icon: FileText,
        items: [
            { name: '시리즈', path: '/series' },
        ],
    },
    {
        name: '홈',
        path: '/home',
        icon: Home,
        items: [
            { name: '번들 관리', path: '/bundles' },
        ],
    },
];

export default function AppSidebar() {
    const pathname = usePathname();

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <div className="px-3 py-2">
                        <h1 className="text-xl font-bold">Zero CMS</h1>
                    </div>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild>
                                        <div className="flex items-center gap-2">
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.name}</span>
                                        </div>
                                    </SidebarMenuButton>
                                    {item.items && item.items.length > 0 && (
                                        <SidebarMenuSub>
                                            {item.items.map((subItem) => {
                                                const isActive = pathname === subItem.path;
                                                return (
                                                    <SidebarMenuSubItem key={subItem.path}>
                                                        <SidebarMenuSubButton asChild isActive={isActive}>
                                                            <Link href={subItem.path}>
                                                                <span>{subItem.name}</span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                );
                                            })}
                                        </SidebarMenuSub>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <div className="border-t pt-4 px-3">
                    <p className="text-xs text-muted-foreground">© 2025 CMS</p>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
