import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/Config";
import { Container, PostCard } from "../Components";
import { useSelector } from "react-redux";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (!authStatus) return;

    appwriteService.getPosts().then((response) => {
      if (response?.documents) {
        setPosts(response.documents);
      }
    });
  }, [authStatus]);

  if (!authStatus) {
    return <div className="text-center py-10">Login to read posts</div>;
  }

  if (posts.length === 0) {
    return <div className="text-center py-10">No posts available</div>;
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard
                $id={post.$id}
                title={post.title}
                featuredImage={post.featuredImage}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
