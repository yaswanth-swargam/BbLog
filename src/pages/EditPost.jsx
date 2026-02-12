import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm } from "../Components";
import appwriteService from "../appwrite/Config";

function EditPost() {
  const [post, setPost] = useState(null);

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) {
      navigate("/");
      return;
    }

    appwriteService.getPost(slug).then((post) => {
      if (post) {
        setPost(post);
      } else {
        navigate("/");
      }
    });
  }, [slug, navigate]);

  if (!post) return null;

  return (
    <div>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default EditPost;
