import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouter = ({ user }) => {
	// const user = false;
	console.log(user);
	return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRouter;
