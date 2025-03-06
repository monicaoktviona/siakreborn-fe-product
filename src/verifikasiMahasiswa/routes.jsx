/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import CariMahasiswa from './containers/CariMahasiswa'
import DetailMahasiswa from './containers/DetailMahasiswa'

const verifikasiMahasiswaRoutes = [
	{ 
		path: "/verifikasimahasiswa",
		element: <CariMahasiswa />,
	},
	{ 
		path: "/verifikasimahasiswa/detail/:id",
		element: <DetailMahasiswa />,
	}
]

export default verifikasiMahasiswaRoutes
