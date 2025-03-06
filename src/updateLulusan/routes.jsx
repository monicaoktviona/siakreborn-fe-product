/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ListMahasiswa from './containers/ListMahasiswa'

const updateLulusanRoutes = [
{ 
	path: "/updatelulusan",
	element: <RequireAuth permissionNeeded="GraduateMahasiswa" ><ListMahasiswa/></RequireAuth>
}

	

]

export default updateLulusanRoutes
