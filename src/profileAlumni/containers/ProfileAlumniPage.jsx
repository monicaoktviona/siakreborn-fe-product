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

import ProfileDetails from '../components/ProfileDetails'
import getDataAlumni from '../services/getDataAlumni'
const ProfileAlumniPage = props => {
const [isLoading, setIsLoading] = useState({
	profileDetails: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataAlumni, setDataAlumni] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, profileDetails: true}))
			const { data: dataAlumni } = await getDataAlumni({ id })
			setDataAlumni(dataAlumni.data)
		} finally {
			setIsLoading(prev => ({...prev, profileDetails: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Profile Alumni Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("UpdateAlumni") &&  (
			  	  <Link to={`/profilealumni/update
			  	  `}>
			  	  	<Button className="p-2 w-full" variant="primary">
			  	  	  Update Profile
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Profile Details"}
	singularName={"Details"}
	items={{...dataAlumni}}
	isLoading={isLoading.profileDetails}
	isCorrelatedWithAnotherComponent={false}
>
	<ProfileDetails {...{ data : { ...dataAlumni }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProfileAlumniPage

