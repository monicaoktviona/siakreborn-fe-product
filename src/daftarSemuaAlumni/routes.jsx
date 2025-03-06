/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarSemuaAlumniPage from './containers/DaftarSemuaAlumniPage'
import DetailAlumniPage from './containers/DetailAlumniPage'

const daftarSemuaAlumniRoutes = [
	{ 
		path: "/daftarsemuaalumni/detail/:id",
		element: <RequireAuth permissionNeeded="ReadAlumni" ><DetailAlumniPage/></RequireAuth>
	},
	{ 
		path: "/daftarsemuaalumni",
		element: <RequireAuth permissionNeeded="ReadAlumni" ><DaftarSemuaAlumniPage/></RequireAuth>
	}
]

export default daftarSemuaAlumniRoutes
