/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarKelasDiajarPage from './containers/DaftarKelasDiajarPage'
import DetailPenilaianKelasPage from './containers/DetailPenilaianKelasPage'
import TambahKomponenPenilaianPage from './containers/TambahKomponenPenilaianPage'
import UbahKomponenPenilaianPage from './containers/UbahKomponenPenilaianPage'
import DetailNilaiMahasiswaPage from './containers/DetailNilaiMahasiswaPage'
import TambahNilaiMahasiswaPage from './containers/TambahNilaiMahasiswaPage'
import TambahPemetaanCapaian from './containers/TambahPemetaanCapaian'

const penilaianKelasRoutes = [
{ 
	path: "/penilaian-kelas/:id/komponen/tambah",
	element: <RequireAuth permissionNeeded="CreateKomponenPenilaian" ><TambahKomponenPenilaianPage/></RequireAuth>
}

	
,
{ 
	path: "/penilaian-kelas/:id/komponen/:komponenId/ubah",
	element: <RequireAuth permissionNeeded="UpdateKomponenPenilaian" ><UbahKomponenPenilaianPage/></RequireAuth>
}

	
,
{ 
	path: "/penilaian-kelas/:id/nilai/:mahasiswaId/tambah",
	element: <RequireAuth permissionNeeded="CreatePenilaian" ><TambahNilaiMahasiswaPage/></RequireAuth>
}

	
,
{ 
	path: "/penilaian-kelas/:id/pemetaan-capaian/tambah",
	element: <RequireAuth permissionNeeded="CreateBobotKomponenPenilaian" ><TambahPemetaanCapaian/></RequireAuth>
}

	
,
{ 
	path: "/penilaian-kelas",
	element: <DaftarKelasDiajarPage />,
}

	
,
{ 
	path: "/penilaian-kelas/:id",
	element: <DetailPenilaianKelasPage />,
}

	
,
{ 
	path: "/penilaian-kelas/:id/nilai/:mahasiswaId",
	element: <DetailNilaiMahasiswaPage />,
}

	

]

export default penilaianKelasRoutes
