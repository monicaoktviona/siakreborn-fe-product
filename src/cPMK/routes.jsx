/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarCPMKPage from './containers/DaftarCPMKPage'
import DetailCPMKPage from './containers/DetailCPMKPage'
import TambahCPMKPage from './containers/TambahCPMKPage'
import UbahCPMKPage from './containers/UbahCPMKPage'

const cPMKRoutes = [
	{ 
		path: "/cpmk",
		element: <DaftarCPMKPage />,
	},
	{ 
		path: "/cpmk/:id",
		element: <DetailCPMKPage />,
	},
	{ 
		path: "/cpmk/tambah",
		element: <TambahCPMKPage />,
	},
	{ 
		path: "/cpmk/ubah",
		element: <UbahCPMKPage />,
	}
]

export default cPMKRoutes
