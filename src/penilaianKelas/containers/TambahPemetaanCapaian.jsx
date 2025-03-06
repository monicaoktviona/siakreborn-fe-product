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
import FormTambahPemetaanCapaian from '../components/FormTambahPemetaanCapaian'

import getKomponenPenilaian from '../services/getKomponenPenilaian'
import getCapaian from '../services/getCapaian'
const TambahPemetaanCapaian = props => {
const { kelasId } = useParams()

	const [isLoading, setIsLoading] = useState({
	tambahPemetaanCapaian: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const kelasId = searchParams.get('kelasId')
const [komponenPenilaian, setKomponenPenilaian] = useState()
const [capaian, setCapaian] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahPemetaanCapaian: true}))
		const { data: komponenPenilaianResponse } = await getKomponenPenilaian({ kelasId  })
		const { data: capaianResponse } = await getCapaian({ kelasId  })

	    setKomponenPenilaian(komponenPenilaianResponse.data)
	    setCapaian(capaianResponse.data)


	    setIsLoading(prev => ({...prev, tambahPemetaanCapaian: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Pemetaan Capaian")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/penilaian-kelas/:id
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
		singularName={"Pemetaan"}
		isLoading={isLoading.tambahPemetaanCapaian}
	>
		{komponenPenilaian && capaian ? 
		(<>
		 <FormTambahPemetaanCapaian
			{...{ 
				komponenPenilaian
, 				capaian
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahPemetaanCapaian

