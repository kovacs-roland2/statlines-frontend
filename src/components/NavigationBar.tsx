'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TeamSelect from '@/components/TeamSelect';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-between border-b bg-white px-8 py-3">
      <NavigationMenu className="w-auto max-w-none justify-start">
        <NavigationMenuList className="flex flex-row gap-0">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/matches"
                className={`block rounded-none px-4 py-3 text-sm ${
                  pathname === '/matches'
                    ? 'border-b-2 border-blue-600 font-semibold'
                    : 'hover:bg-gray-50'
                }`}
              >
                Matches
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/facts"
                className={`block rounded-none px-4 py-3 text-sm ${
                  pathname === '/facts'
                    ? 'border-b-2 border-blue-600 font-semibold'
                    : 'hover:bg-gray-50'
                }`}
              >
                Facts
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <TeamSelect />
    </nav>
  );
}
