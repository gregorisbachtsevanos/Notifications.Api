import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouter = ({ user }) => {
	// console.log(user);
	return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRouter;
