/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import Home from "./containers/Home";
import RequireAuth from '@/commons/auth/RequireAuth';

const homeRoutes = [ 
{ 
	path: "/",
	element: <RequireAuth permissionNeeded="home" ><Home/></RequireAuth>
}



]

export default homeRoutes
