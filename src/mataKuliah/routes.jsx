/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import TambahMataKuliahPage from './containers/TambahMataKuliahPage'
import DaftarMataKuliahPage from './containers/DaftarMataKuliahPage'
import DetailMataKuliahPage from './containers/DetailMataKuliahPage'
import UbahMataKuliahPage from './containers/UbahMataKuliahPage'

const mataKuliahRoutes = [
{ 
	path: "/matakuliah/tambah",
	element: <TambahMataKuliahPage />,
}

	
,
{ 
	path: "/matakuliah/ubah",
	element: <UbahMataKuliahPage />,
}

	
,
{ 
	path: "/matakuliah",
	element: <DaftarMataKuliahPage />,
}

	
,
{ 
	path: "/matakuliah/:id",
	element: <DetailMataKuliahPage />,
}

	

]

export default mataKuliahRoutes
