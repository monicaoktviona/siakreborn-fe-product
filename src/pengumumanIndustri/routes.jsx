/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarPengumumanIndustriPage from './containers/DaftarPengumumanIndustriPage'
import PostPengumumanIndustriPage from './containers/PostPengumumanIndustriPage'

const pengumumanIndustriRoutes = [
	{ 
		path: "/pengumumanindustri",
		element: <RequireAuth permissionNeeded="ReadInformasiIndustri" ><DaftarPengumumanIndustriPage/></RequireAuth>
	},
	{ 
		path: "/pengumumanindustri/post",
		element: <RequireAuth permissionNeeded="SaveInformasiIndustri" ><PostPengumumanIndustriPage/></RequireAuth>
	}
]

export default pengumumanIndustriRoutes
