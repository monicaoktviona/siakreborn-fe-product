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
import ModifiedFormFormProfileUpdateMahasiswa from '../components/ModifiedFormFormProfileUpdateMahasiswa'

import getDataMahasiswaUpdate from '../services/getDataMahasiswaUpdate'
import getMakePublic from '../services/getMakePublic'
const UpdateProfilePage = props => {
const [isLoading, setIsLoading] = useState({
	formProfileUpdateMahasiswa: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [dataMahasiswaUpdate, setDataMahasiswaUpdate] = useState()
const [makePublic, setMakePublic] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, formProfileUpdateMahasiswa: true}))
		const { data: dataMahasiswaUpdateResponse } = await getDataMahasiswaUpdate({ id  })
		const { data: makePublicResponse } = await getMakePublic({ id  })

	    setDataMahasiswaUpdate(dataMahasiswaUpdateResponse.data)
	    setMakePublic(makePublicResponse.data)


	    setIsLoading(prev => ({...prev, formProfileUpdateMahasiswa: false}))
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
			  	<Link to={`/profilemahasiswa
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
		isLoading={isLoading.formProfileUpdateMahasiswa}
	>
		{dataMahasiswaUpdate && makePublic ? 
		(<>
		 <ModifiedFormFormProfileUpdateMahasiswa
			{...{ 
				dataMahasiswaUpdate
, 				makePublic
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateProfilePage

