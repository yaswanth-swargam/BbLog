import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PostForm from '../Components/PostForm'
export default function AddPost() {
  const userData = useSelector((state) => state.auth.userData);

  if (!userData) {
    return <Navigate to="/login" />;
  }

  return <PostForm />;
}
