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
import FormFormProfileUpdateAlumni from '../components/FormFormProfileUpdateAlumni'

import getDataAlumniUpdate from '../services/getDataAlumniUpdate'
import getMakePublic from '../services/getMakePublic'
const UpdateProfilePage = props => {

	const [isLoading, setIsLoading] = useState({
	formProfileUpdateAlumni: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [dataAlumniUpdate, setDataAlumniUpdate] = useState()
const [makePublic, setMakePublic] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, formProfileUpdateAlumni: true}))
		const { data: dataAlumniUpdateResponse } = await getDataAlumniUpdate({ id  })
		const { data: makePublicResponse } = await getMakePublic({ id  })

	    setDataAlumniUpdate(dataAlumniUpdateResponse.data)
	    setMakePublic(makePublicResponse.data)


	    setIsLoading(prev => ({...prev, formProfileUpdateAlumni: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Profile Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/profilealumni
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
		singularName={"Profile"}
		isLoading={isLoading.formProfileUpdateAlumni}
	>
		{dataAlumniUpdate && makePublic ? 
		(<>
		 <FormFormProfileUpdateAlumni
			{...{ 
				dataAlumniUpdate
, 				makePublic
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateProfilePage

