/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarRiwayatAkademisPage from './containers/DaftarRiwayatAkademisPage'
import DetailPenilaianMahasiswaPage from './containers/DetailPenilaianMahasiswaPage'

const riwayatAkademisRoutes = [
{ 
	path: "/akademis/riwayat",
	element: <RequireAuth permissionNeeded="ReadKelasMahasiswaMe" ><DaftarRiwayatAkademisPage/></RequireAuth>
}

	
,
{ 
	path: "/akademis/riwayat/:id",
	element: <RequireAuth permissionNeeded="ReadKelasMahasiswaMe" ><DetailPenilaianMahasiswaPage/></RequireAuth>
}

	

]

export default riwayatAkademisRoutes
