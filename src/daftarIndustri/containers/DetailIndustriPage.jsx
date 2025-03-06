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

import DetailIndustri from '../components/DetailIndustri'
import getDetailDataIndustri from '../services/getDetailDataIndustri'
const DetailIndustriPage = props => {
const [isLoading, setIsLoading] = useState({
	detailIndustri: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailDataIndustri, setDetailDataIndustri] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailIndustri: true}))
			const { data: detailDataIndustri } = await getDetailDataIndustri({ id, id })
			setDetailDataIndustri(detailDataIndustri.data)
		} finally {
			setIsLoading(prev => ({...prev, detailIndustri: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Industri Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/daftarindustri
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
	title={"Detail Industri"}
	singularName={"Industri"}
	items={{...detailDataIndustri}}
	isLoading={isLoading.detailIndustri}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailIndustri {...{ data : { ...detailDataIndustri }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailIndustriPage

