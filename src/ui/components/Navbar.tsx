'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavigationItem = {
  label: string
  path: string
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Junctions',
    path: '/junctions',
  },
  {
    label: 'Cases',
    path: '/cases',
  },
]

const NavigationComponent = ({
  navigationPath,
  navigationLabel,
}: {
  navigationPath: string
  navigationLabel: string
}) => {
  const pathName = usePathname()

  return (
    <li
      className={
        pathName.includes(navigationPath) ? 'font-medium' : 'text-white/75'
      }
    >
      <Link href={navigationPath}>{navigationLabel}</Link>
    </li>
  )
}

const Navbar = () => {
  return (
    <div className='sticky top-0 flex h-16 w-full items-center border-b-2 border-[#2e2e2e] bg-inherit px-14'>
      <ul className='flex gap-4'>
        {navigationItems.map((item) => (
          <NavigationComponent
            key={item.label}
            navigationPath={item.path}
            navigationLabel={item.label}
          />
        ))}
      </ul>
    </div>
  )
}

export default Navbar
