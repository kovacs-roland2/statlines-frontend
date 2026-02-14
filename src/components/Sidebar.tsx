'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-48 shrink-0">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/matches"
                className={`block rounded-md px-4 py-2 text-sm ${
                  pathname === '/matches'
                    ? 'bg-gray-200 font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                Matches
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  );
}
