/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarKelasPage from './containers/DaftarKelasPage'
import DetailKelasPage from './containers/DetailKelasPage'
import UbahKelasPage from './containers/UbahKelasPage'
import TambahKelasPage from './containers/TambahKelasPage'

const kelasRoutes = [
{ 
	path: "/kelas",
	element: <DaftarKelasPage />,
}

	
,
{ 
	path: "/kelas/ubah",
	element: <RequireAuth permissionNeeded="UpdateKelas" ><UbahKelasPage/></RequireAuth>
}

	
,
{ 
	path: "/kelas/tambah",
	element: <RequireAuth permissionNeeded="CreateKelas" ><TambahKelasPage/></RequireAuth>
}

	
,
{ 
	path: "/kelas/:id",
	element: <DetailKelasPage />,
}

	

]

export default kelasRoutes
