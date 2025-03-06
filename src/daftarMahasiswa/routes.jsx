/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarMahasiswaPage from './containers/DaftarMahasiswaPage'
import DetailMahasiswaPage from './containers/DetailMahasiswaPage'

const daftarMahasiswaRoutes = [
	{ 
		path: "/daftarmahasiswa/detail/:id",
		element: <RequireAuth permissionNeeded="ReadMahasiswaPublic" ><DetailMahasiswaPage/></RequireAuth>
	},
	{ 
		path: "/daftarmahasiswa",
		element: <RequireAuth permissionNeeded="ReadMahasiswaPublic" ><DaftarMahasiswaPage/></RequireAuth>
	}
]

export default daftarMahasiswaRoutes
