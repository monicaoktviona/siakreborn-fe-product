/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ProfileMahasiswaPage from './containers/ProfileMahasiswaPage'
import UpdateProfilePage from './containers/UpdateProfilePage'

const profileMahasiswaRoutes = [
	{ 
		path: "/profilemahasiswa/update",
		element: <RequireAuth permissionNeeded="UpdateMahasiswa" ><UpdateProfilePage/></RequireAuth>
	},
	{ 
		path: "/profilemahasiswa",
		element: <RequireAuth permissionNeeded="ReadDetailMahasiswa" ><ProfileMahasiswaPage/></RequireAuth>
	}
]

export default profileMahasiswaRoutes
