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
	  element: (
		<RequireAuth permissionNeeded="CreateMataKuliah">
		  <TambahMataKuliahPage />
		</RequireAuth>
	  ),
	},
	{
	  path: "/matakuliah/ubah",
	  element: (
		<RequireAuth permissionNeeded="UpdateMataKuliah">
		  <UbahMataKuliahPage />
		</RequireAuth>
	  ),
	},
	{
	  path: "/matakuliah",
	  element: (
		<RequireAuth permissionNeeded="ReadMataKuliah">
		  <DaftarMataKuliahPage />
		</RequireAuth>
	  ),
	},
	{
	  path: "/matakuliah/:id",
	  element: (
		<RequireAuth permissionNeeded="ReadMataKuliah">
		  <DetailMataKuliahPage />
		</RequireAuth>
	  ),
	},
	{ 
		path: "/matakuliah/:id/prasyarat/ubah",
		element: <RequireAuth permissionNeeded="UpdateMataKuliahPrasyarat" ><UbahMataKuliahPrasyaratPage/></RequireAuth>
	}
	
		
	,
	{ 
		path: "/matakuliah/:id/prasyarat/tambah",
		element: <RequireAuth permissionNeeded="SaveMataKuliahPrasyarat" ><TambahMataKuliahPrasyaratPage/></RequireAuth>
	}
	
		
	,
	{ 
		path: "/matakuliah/:id/prasyarat/:prasyaratId",
		element: <RequireAuth permissionNeeded="ReadMataKuliahPrasyarat" ><DetailMataKuliahPrasyaratPage/></RequireAuth>
	}
];
  
export default mataKuliahRoutes
