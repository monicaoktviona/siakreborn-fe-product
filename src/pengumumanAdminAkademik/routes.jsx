/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarPengumumanAdminAkademikPage from './containers/DaftarPengumumanAdminAkademikPage'
import PostPengumumanAdminAkademikPage from './containers/PostPengumumanAdminAkademikPage'

const pengumumanAdminAkademikRoutes = [
	{ 
		path: "/pengumumanakademik",
		element: <RequireAuth permissionNeeded="ReadInformasiAkademik" ><DaftarPengumumanAdminAkademikPage/></RequireAuth>
	},
	{ 
		path: "/pengumumanakademik/post",
		element: <RequireAuth permissionNeeded="SaveInformasiAkademik" ><PostPengumumanAdminAkademikPage/></RequireAuth>
	}
]

export default pengumumanAdminAkademikRoutes
