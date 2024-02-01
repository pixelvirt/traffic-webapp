import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 flex h-16 w-full items-center border-b-2 border-[#2e2e2e] bg-inherit px-14'>
      <ul className='flex gap-4'>
        <li>
          <Link href={'/'}>Overview</Link>
        </li>
        <li>
          <Link href={'/cases'}>Cases</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
