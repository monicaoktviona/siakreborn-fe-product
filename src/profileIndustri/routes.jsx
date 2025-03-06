/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ProfileIndustriPage from './containers/ProfileIndustriPage'
import UpdateProfilePage from './containers/UpdateProfilePage'

const profileIndustriRoutes = [
	{ 
		path: "/profileindustri",
		element: <ProfileIndustriPage />,
	},
	{ 
		path: "/profileindustri/update",
		element: <UpdateProfilePage />,
	}
]

export default profileIndustriRoutes
