import React from 'react'
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  return (
    <div className='flex flex-col h-full md:h-[90vh] justify-between mr-6'>
        <div className='mt-6 flex flex-col space-y-4 '>
            <Link tp="/">
                <div>
                    
                </div>
            </Link>
        </div>
    </div>
  )
}

export default LeftSideBar