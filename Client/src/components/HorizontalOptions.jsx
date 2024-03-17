import React, { useContext } from 'react'
import { userContext } from '../context/UserContextProvider'
import MenuDialog from './MenuDialog';

function HorizontalOptions({isMenuOpen , setIsMenuOpen}) {
    const {User} = useContext(userContext);
    // console.log("ids ",userId , User)
  return (
    // container
    <div className=' absolute right-0 p-2' >
        {/* wrapper */}
        <MenuDialog isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </div>
  )
}

export default HorizontalOptions