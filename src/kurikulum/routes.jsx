/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarKurikulumPage from './containers/DaftarKurikulumPage'
import DetailKurikulumPage from './containers/DetailKurikulumPage'
import UbahKurikulumPage from './containers/UbahKurikulumPage'
import TambahKurikulumPage from './containers/TambahKurikulumPage'

const kurikulumRoutes = [
	{
	  path: "/kurikulum/ubah",
	  element: (
		<RequireAuth permissionNeeded="UpdateKurikulum">
		  <UbahKurikulumPage />
		</RequireAuth>
	  ),
	},
	{
	  path: "/kurikulum/tambah",
	  element: (
		<RequireAuth permissionNeeded="CreateKurikulum">
		  <TambahKurikulumPage />
		</RequireAuth>
	  ),
	},
	{
	  path: "/kurikulum",
	  element: (
		<RequireAuth permissionNeeded="ReadKurikulum">
		  <DaftarKurikulumPage />
		</RequireAuth>
	  ),
	},
	{
	  path: "/kurikulum/:id",
	  element: (
		<RequireAuth permissionNeeded="ReadKurikulum">
		  <DetailKurikulumPage />
		</RequireAuth>
	  ),
	},
  ];
  
export default kurikulumRoutes
