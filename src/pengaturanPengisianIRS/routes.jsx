/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import PengaturanMasaPengisianIRSPage from './containers/PengaturanMasaPengisianIRSPage'

const pengaturanPengisianIRSRoutes = [
{ 
	path: "/irs/pengaturan",
	element: <RequireAuth permissionNeeded="UpdatePengisianRencanaStudi" ><PengaturanMasaPengisianIRSPage/></RequireAuth>
}

	

]

export default pengaturanPengisianIRSRoutes
