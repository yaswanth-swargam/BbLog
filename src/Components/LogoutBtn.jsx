import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import authService from "../appwrite/auth";
import Button from "./Button";

export default function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandle = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  return (
    <Button onClick={logoutHandle}>
      Logout
    </Button>
  );
}
