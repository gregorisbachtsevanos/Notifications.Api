import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ user }) => {
	// const user = true;
	console.log(user);
	return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
