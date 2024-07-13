import React from 'react'
import service from '../appWrite/confi'
import {Link} from 'react-router-dom'
import { AppwriteException } from 'appwrite'
const PostCard = ({$Id , featuredImage ,title}) => {
  return (
    <Link to={`/post/${$Id}`}>
    <div className='w-full p-4 rounded-xl bg-gray-200'>
        <div className='w-full justify-center mb-4'>
            <img src={AppwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='rounded-xl'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard