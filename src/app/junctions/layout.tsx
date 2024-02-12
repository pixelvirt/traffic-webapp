import BreadCrumbs from '@/components/Breadcrumb'
import Sidebar from '@/components/sidebar/Sidebar'

export default async function Layouts({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex w-full flex-col'>
        <BreadCrumbs
          homeElement={'Home'}
          separator={<span> &gt; </span>}
          activeClasses='text-white font-bold'
          containerClasses='flex py-5 pl-4'
          listClasses='hover:underline mx-2 fon-bold'
          capitalizeLinks
        />
        {children}
      </div>
    </div>
  )
}
