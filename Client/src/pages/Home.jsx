import React from 'react'
import Navbar from '../components/Navbar'
import Pets from '../components/Pets'
import Filters from '../components/Filters'
import SideBar from '../components/SideBar'

function Home() {
  return (
    <>
        {/* <Navbar page="home"/> */}
        <div className='flex justify-between bg-[#dddddd] gap-[5px] w-[100vw] p-2'>
          <SideBar/>
           <Pets />
          <Filters />
        </div>
    </>
  )
}

export default Home