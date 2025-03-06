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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import DetailCPMK from '../components/DetailCPMK'
import getCPMKDataDetail from '../services/getCPMKDataDetail'
import SubCPMKTable from "../components/SubCPMKTable";

import getDataSubCPMK from '../services/getDataSubCPMK'
const DetailCPMKPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailCPMK: false,
	daftarSubCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPMKDataDetail, setCPMKDataDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailCPMK: true}))
			const { data: cPMKDataDetail } = await getCPMKDataDetail({ id })
			setCPMKDataDetail(cPMKDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailCPMK: false}))
		}
	}
	 fetchData()
}, [])
const [dataSubCPMK, setDataSubCPMK] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarSubCPMK: true}))
				const { data: dataSubCPMK } = await getDataSubCPMK()
				setDataSubCPMK(dataSubCPMK.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarSubCPMK: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Detail CPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/cpmk
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
	title={"Detail CPMK"}
	singularName={"CPMK"}
	items={{...cPMKDataDetail}}
	isLoading={isLoading.detailCPMK}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailCPMK {...{ data : { ...cPMKDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Daftar SubCPMK"}
	singularName={"SubCPMK"}
	items={[dataSubCPMK]}
	isLoading={isLoading.daftarSubCPMK}
>
	<SubCPMKTable
		
		dataSubCPMK={dataSubCPMK}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailCPMKPage

