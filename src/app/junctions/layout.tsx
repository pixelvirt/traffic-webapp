import Sidebar from '@/ui/sidebar/Sidebar'

export default async function Layouts({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex'>
      <Sidebar />
      {children}
    </div>
  )
}
