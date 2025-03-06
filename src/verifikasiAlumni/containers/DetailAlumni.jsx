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

import DetailsAlumni from '../components/DetailsAlumni'
import getDetailDataAlumni from '../services/getDetailDataAlumni'
const DetailAlumni = props => {
const { id } = useParams()

	const [isLoading, setIsLoading] = useState({
	detailsAlumni: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailDataAlumni, setDetailDataAlumni] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailsAlumni: true}))
			const { data: detailDataAlumni } = await getDetailDataAlumni({ id })
			setDetailDataAlumni(detailDataAlumni.data)
		} finally {
			setIsLoading(prev => ({...prev, detailsAlumni: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Alumni")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/verifikasialumni
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Details Alumni"}
	singularName={"Alumni"}
	items={{...detailDataAlumni}}
	isLoading={isLoading.detailsAlumni}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailsAlumni {...{ data : { ...detailDataAlumni }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailAlumni

