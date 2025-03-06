/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarProgramStudiPage from './containers/DaftarProgramStudiPage'
import DetailProgramStudiPage from './containers/DetailProgramStudiPage'
import UbahProgramStudiPage from './containers/UbahProgramStudiPage'
import TambahProgramStudiPage from './containers/TambahProgramStudiPage'

const programStudiRoutes = [
{ 
	path: "/programstudi",
	element: <DaftarProgramStudiPage />,
}

	
,
{ 
	path: "/programstudi/ubah",
	element: <RequireAuth permissionNeeded="UpdateProgramStudi" ><UbahProgramStudiPage/></RequireAuth>
}

	
,
{ 
	path: "/programstudi/tambah",
	element: <RequireAuth permissionNeeded="CreateProgramStudi" ><TambahProgramStudiPage/></RequireAuth>
}

	
,
{ 
	path: "/programstudi/:id",
	element: <DetailProgramStudiPage />,
}

	

]

export default programStudiRoutes
