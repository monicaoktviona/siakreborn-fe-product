/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarAlumniPage from './containers/DaftarAlumniPage'
import DetailAlumniPage from './containers/DetailAlumniPage'

const daftarAlumniRoutes = [
{ 
	path: "/daftaralumni/detail/:id",
	element: <RequireAuth permissionNeeded="ReadAlumniPublic" ><DetailAlumniPage/></RequireAuth>
}

	
,
{ 
	path: "/daftaralumni",
	element: <RequireAuth permissionNeeded="ReadAlumniPublic" ><DaftarAlumniPage/></RequireAuth>
}

	

]

export default daftarAlumniRoutes
