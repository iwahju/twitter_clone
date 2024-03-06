import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4'>
      <div className='px-6'>
        <LeftSideBar/>
      </div>
    </div>
  )
}

export default Home