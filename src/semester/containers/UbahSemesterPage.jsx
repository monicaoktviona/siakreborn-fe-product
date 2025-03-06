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
import FormUbahSemester from '../components/FormUbahSemester'

import getSemesterData from '../services/getSemesterData'
import getKurikulum from '../services/getKurikulum'
const UbahSemesterPage = props => {
const { id } = useParams()

	const [isLoading, setIsLoading] = useState({
	ubahSemester: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [semesterData, setSemesterData] = useState()
const [kurikulum, setKurikulum] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahSemester: true}))
		const { data: semesterDataResponse } = await getSemesterData({ id  })
		const { data: kurikulumResponse } = await getKurikulum({ id  })

	    setSemesterData(semesterDataResponse.data)
	    setKurikulum(kurikulumResponse.data)


	    setIsLoading(prev => ({...prev, ubahSemester: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Semester Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/semester
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
		singularName={"Semester"}
		isLoading={isLoading.ubahSemester}
	>
		{semesterData && kurikulum ? 
		(<>
		 <FormUbahSemester
			{...{ 
				semesterData
, 				kurikulum
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahSemesterPage

