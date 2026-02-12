import React from 'react'
import appwriteService from '../appwrite/Config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        {featuredImage && (
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        )}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mt-2">
        {title}
      </h2>
    </Link>
  );
}


export default PostCard