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

import DetailSubCPMK from '../components/DetailSubCPMK'
import getSubCPMKDataDetail from '../services/getSubCPMKDataDetail'
const DetailSubCPMKPage = props => {
const { id } = useParams()

	const [isLoading, setIsLoading] = useState({
	detailSubCPMK: false,
	detailCapaian: false,
	});
	const { setTitle } = useContext(HeaderContext);

const [subCPMKDataDetail, setSubCPMKDataDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailSubCPMK: true}))
			const { data: subCPMKDataDetail } = await getSubCPMKDataDetail({ id })
			setSubCPMKDataDetail(subCPMKDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailSubCPMK: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail SubCPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/subcpmk
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
	title={"Detail SubCPMK"}
	singularName={"SubCPMK"}
	items={{...subCPMKDataDetail}}
	isLoading={isLoading.detailSubCPMK}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailSubCPMK {...{ data : { ...subCPMKDataDetail }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailSubCPMKPage

