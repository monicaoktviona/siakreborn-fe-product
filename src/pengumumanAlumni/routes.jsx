/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarPengumumanAlumniPage from './containers/DaftarPengumumanAlumniPage'
import PostPengumumanAlumniPage from './containers/PostPengumumanAlumniPage'

const pengumumanAlumniRoutes = [
{ 
	path: "/pengumumanalumni/post",
	element: <RequireAuth permissionNeeded="SaveInformasiAlumni" ><PostPengumumanAlumniPage/></RequireAuth>
}

	
,
{ 
	path: "/pengumumanalumni",
	element: <RequireAuth permissionNeeded="ReadInformasiAlumni" ><DaftarPengumumanAlumniPage/></RequireAuth>
}

	

]

export default pengumumanAlumniRoutes
