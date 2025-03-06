/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarSemuaMahasiswaPage from './containers/DaftarSemuaMahasiswaPage'
import DetailMahasiswaPage from './containers/DetailMahasiswaPage'

const daftarSemuaMahasiswaRoutes = [
	{ 
		path: "/daftarsemuamahasiswa/detail/:id",
		element: <RequireAuth permissionNeeded="ReadMahasiswa" ><DetailMahasiswaPage/></RequireAuth>
	},
	{ 
		path: "/daftarsemuamahasiswa",
		element: <RequireAuth permissionNeeded="ReadMahasiswa" ><DaftarSemuaMahasiswaPage/></RequireAuth>
	}
]

export default daftarSemuaMahasiswaRoutes
