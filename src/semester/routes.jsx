/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarSemesterPage from './containers/DaftarSemesterPage'
import UbahSemesterPage from './containers/UbahSemesterPage'
import TambahSemesterPage from './containers/TambahSemesterPage'

const semesterRoutes = [
{ 
	path: "/semester",
	element: <RequireAuth permissionNeeded="ReadSemester" ><DaftarSemesterPage/></RequireAuth>
}

	
,
{ 
	path: "/semester/ubah",
	element: <RequireAuth permissionNeeded="UpdateSemester" ><UbahSemesterPage/></RequireAuth>
}

	
,
{ 
	path: "/semester/tambah",
	element: <RequireAuth permissionNeeded="CreateSemester" ><TambahSemesterPage/></RequireAuth>
}

	

]

export default semesterRoutes
