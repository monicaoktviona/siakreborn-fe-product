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
import { useSearchParams } from "react-router";
import FormTambahNilai from '../components/FormTambahNilai'

import getKomponenPenilaianDataList from '../services/getKomponenPenilaianDataList'
const TambahNilaiMahasiswaPage = props => {
const { kelasId, mahasiswaId } = useParams()

	const [isLoading, setIsLoading] = useState({
	tambahNilai: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const mahasiswaId = searchParams.get('mahasiswaId')
const kelasId = searchParams.get('kelasId')
const [komponenPenilaianDataList, setKomponenPenilaianDataList] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahNilai: true}))
		const { data: komponenPenilaianDataListResponse } = await getKomponenPenilaianDataList({ mahasiswaId  })

	    setKomponenPenilaianDataList(komponenPenilaianDataListResponse.data)


	    setIsLoading(prev => ({...prev, tambahNilai: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Nilai Mahasiswa Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/penilaian-kelas/:id/nilai/${mahasiswaId}
			  	`}>
			  		<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Nilai"}
		isLoading={isLoading.tambahNilai}
	>
		{komponenPenilaianDataList ? 
		(<>
		 <FormTambahNilai
			{...{ 
				komponenPenilaianDataList
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahNilaiMahasiswaPage

