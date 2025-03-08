/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import LaporanCPMKPage from './containers/LaporanCPMKPage'

const laporanCPMKRoutes = [
	{ 
		path: "/cpmk/laporan",
		element: <RequireAuth permissionNeeded="ReadLaporanCPMK"><LaporanCPMKPage /></RequireAuth>
	}
]

export default laporanCPMKRoutes
