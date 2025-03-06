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
import FormTambahKelas from '../components/FormTambahKelas'

import getMataKuliah from '../services/getMataKuliah'
import getSemester from '../services/getSemester'
const TambahKelasPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahKelas: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mataKuliah, setMataKuliah] = useState()
const [semester, setSemester] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahKelas: true}))
		const { data: mataKuliahResponse } = await getMataKuliah({  })
		const { data: semesterResponse } = await getSemester({  })

	    setMataKuliah(mataKuliahResponse.data)
	    setSemester(semesterResponse.data)


	    setIsLoading(prev => ({...prev, tambahKelas: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Kelas Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/kelas
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
		singularName={"Kelas"}
		isLoading={isLoading.tambahKelas}
	>
		{mataKuliah && semester ? 
		(<>
		 <FormTambahKelas
			{...{ 
				mataKuliah
, 				semester
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahKelasPage

