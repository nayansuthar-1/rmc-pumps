import { Menu } from 'lucide-react'
import React from 'react'

function Navbar(toggleSidebar){
  return (
    <div className='h-16 bg-white border-b flex items-center justify-between px-4 md:px-6'>
      
      <button className='md:hidden' onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      <h1 className='text-lg md:text-xl font-semibold'>RMC Pumps Dashboard</h1>

      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-sm md:text-base">
          Admin
        </span>
      </div>
    </div>
  )
}

export default Navbar
