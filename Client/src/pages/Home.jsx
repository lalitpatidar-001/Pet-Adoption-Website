import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Pets from '../components/Pets'
import Filters from '../components/Filters'
import SideBar from '../components/SideBar'
import CreatePost from '../components/CreatePost'
import BlackScreen from '../components/BlackScreen'

function Home() {
  const [isCreateOpened, setIsCreateOpened] = useState(false);
  const [posts, setPosts] = useState(null);
  const [isPostLoading , setIsPostLoading] = useState(false);


  const handleFilterChange = (filteredPosts) => {
    setPosts(filteredPosts);
  };

console.log("rendering home")
  useEffect(() => {
    if (isCreateOpened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isCreateOpened]);

  return (
    <>
        {/* <Navbar page="home"/> */}
        <div className={`flex justify-between bg-[#dddddd] gap-[5px] w-[100vw] p-2  top-0 `}>
        {isCreateOpened && <BlackScreen isCreateOpened={isCreateOpened} setIsCreateOpened={setIsCreateOpened} />}
        {isCreateOpened && 
        <CreatePost
         isCreateOpened={isCreateOpened} setIsCreateOpened={setIsCreateOpened} 
         isPostLoading={isPostLoading}  setIsPostLoading={setIsPostLoading}
         />}

          <SideBar
           isCreateOpened={isCreateOpened} setIsCreateOpened={setIsCreateOpened}/>

          { isPostLoading ? <span>Loading...</span> : <Pets 
          setPosts={setPosts} posts={posts}
          />}
          <Filters 
         onFilterChange={handleFilterChange}
          isPostLoading={isPostLoading}  setIsPostLoading={setIsPostLoading} />
        </div>
    </>
  )
}

export default Home