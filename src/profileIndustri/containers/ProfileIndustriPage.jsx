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
import getDataIndustri from '../services/getDataIndustri'
const ProfileIndustriPage = props => {
const [isLoading, setIsLoading] = useState({
	profileDetails: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataIndustri, setDataIndustri] = useState()
const { id } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, profileDetails: true}))
			const { data: dataIndustri } = await getDataIndustri({ id })
			setDataIndustri(dataIndustri.data)
		} finally {
			setIsLoading(prev => ({...prev, profileDetails: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Profile Industri Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/profileindustri/update
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Update Profile
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Profile Details"}
	singularName={"Details"}
	items={{...dataIndustri}}
	isLoading={isLoading.profileDetails}
	isCorrelatedWithAnotherComponent={false}
>
	<ProfileDetails {...{ data : { ...dataIndustri }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProfileIndustriPage

