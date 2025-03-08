/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarCPLPage from './containers/DaftarCPLPage'
import DetailCPLPage from './containers/DetailCPLPage'
import TambahCPLPage from './containers/TambahCPLPage'
import UbahCPLPage from './containers/UbahCPLPage'

const cPLRoutes = [
	{ 
		path: "/cpl/tambah",
		element: <RequireAuth permissionNeeded="CreateCPL" ><TambahCPLPage/></RequireAuth>
	}	
	,
	{ 
		path: "/cpl/ubah",
		element: <RequireAuth permissionNeeded="UpdateCPL" ><UbahCPLPage/></RequireAuth>
	}	
	,
	{ 
		path: "/cpl",
		element: <RequireAuth permissionNeeded="ReadCPL" ><DaftarCPLPage/></RequireAuth>
	}	
	,
	{ 
		path: "/cpl/:id",
		element: <RequireAuth permissionNeeded="ReadCPL" ><DetailCPLPage/></RequireAuth>
	}	
	
]

export default cPLRoutes
