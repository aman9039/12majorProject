import React,{useEffect,useState} from 'react'
import {PostCard} from '../components/index'
import Container from '../components/container/Container'
import appwriteService from '../appWrite/confi'

 const AllPosts = () => {

    const [posts,setPosts] = useState([])

    useEffect(() => {},[])

    appwriteService.getPosts([]).then((posts)=> {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts;