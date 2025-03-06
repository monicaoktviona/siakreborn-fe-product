/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from "react-router";
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import KomponenTable from "../components/KomponenTable";

import getKomponenPenilaianDataList from '../services/getKomponenPenilaianDataList'
import MahasiswaTable from "../components/MahasiswaTable";

import getMahasiswaDataList from '../services/getMahasiswaDataList'
import PemetaanTable from "../components/PemetaanTable";

import getCapaianDataList from '../services/getCapaianDataList'
const DetailPenilaianKelasPage = props => {
const { kelasId } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarKomponenPenilaian: false,
	daftarMahasiswa: false,
	daftarPemetaanCapaian: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [komponenPenilaianDataList, setKomponenPenilaianDataList] = useState()
	



useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarKomponenPenilaian: true}))
				const { data: komponenPenilaianDataList } = await getKomponenPenilaianDataList({ kelasId, komponenPenilaian })
				setKomponenPenilaianDataList(komponenPenilaianDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarKomponenPenilaian: false}))
			}
		}
		fetchData()	
  	}, [])
const [mahasiswaDataList, setMahasiswaDataList] = useState()
	



useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarMahasiswa: true}))
				const { data: mahasiswaDataList } = await getMahasiswaDataList({ kelasId })
				setMahasiswaDataList(mahasiswaDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarMahasiswa: false}))
			}
		}
		fetchData()	
  	}, [])
const [capaianDataList, setCapaianDataList] = useState()
	



useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarPemetaanCapaian: true}))
				const { data: capaianDataList } = await getCapaianDataList({ kelasId })
				setCapaianDataList(capaianDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarPemetaanCapaian: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Penilaian Kelas Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/penilaian-kelas
			  	`}>
			  		<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			  	
			  <Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateKomponenPenilaian") &&  (
			  	  <Link to={`/penilaian-kelas/:id/komponen/tambah
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah Komponen Penilaian
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			  	{checkPermission("CreateBobotKomponenPenilaian") &&  (
			  	  <Link to={`/penilaian-kelas/:id/pemetaan-capaian/tambah
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah/Ubah Pemetaan Capaian
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Daftar Komponen Penilaian"}
	singularName={"Komponen"}
	items={[komponenPenilaianDataList]}
	isLoading={isLoading.daftarKomponenPenilaian}
>
	<KomponenTable
		
		komponenPenilaianDataList={komponenPenilaianDataList}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.ListContainerTableLayout
	title={"Daftar Mahasiswa"}
	singularName={"Mahasiswa"}
	items={[mahasiswaDataList]}
	isLoading={isLoading.daftarMahasiswa}
>
	<MahasiswaTable
		
		mahasiswaDataList={mahasiswaDataList}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.ListContainerTableLayout
	title={"Daftar Pemetaan Capaian"}
	singularName={"Pemetaan"}
	items={[capaianDataList]}
	isLoading={isLoading.daftarPemetaanCapaian}
>
	<PemetaanTable
		
		capaianDataList={capaianDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailPenilaianKelasPage

