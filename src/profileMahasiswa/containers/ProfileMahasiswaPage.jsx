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
import { useAuth } from "@/commons/auth"; 

import ProfileDetails from '../components/ProfileDetails'
import getDataMahasiswa from '../services/getDataMahasiswa'
const ProfileMahasiswaPage = props => {
const [isLoading, setIsLoading] = useState({
	profileDetails: false,

	});
	const { setTitle } = useContext(HeaderContext);

const { checkPermission } = useAuth(); 
const { id } = useParams()
const [dataMahasiswa, setDataMahasiswa] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, profileDetails: true}))
			const { data: dataMahasiswa } = await getDataMahasiswa({ id })
			setDataMahasiswa(dataMahasiswa.data)
		} finally {
			setIsLoading(prev => ({...prev, profileDetails: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Profile Mahasiswa Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("UpdateMahasiswa") &&  (
			  	  <Link to={`/profilemahasiswa/update
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
	items={{...dataMahasiswa}}
	isLoading={isLoading.profileDetails}
	isCorrelatedWithAnotherComponent={false}
>
	<ProfileDetails {...{ data : { ...dataMahasiswa }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProfileMahasiswaPage

