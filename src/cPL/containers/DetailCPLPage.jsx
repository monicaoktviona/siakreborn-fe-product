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
import DetailCPL from '../components/DetailCPL'
import getCPLDataDetail from '../services/getCPLDataDetail'
import CPMKTable from "../components/CPMKTable";

import getBobot from '../services/getBobot'
const DetailCPLPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailCPL: false,
	daftarCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPLDataDetail, setCPLDataDetail] = useState()
const { id } = useParams();
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailCPL: true}))
			const { data: cPLDataDetail } = await getCPLDataDetail({ id })
			setCPLDataDetail(cPLDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailCPL: false}))
		}
	}
	 fetchData()
}, [])
const [bobot, setBobot] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarCPMK: true}))
				const { data: bobot } = await getBobot({ parentCPLId: id })
				setBobot(bobot.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarCPMK: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Detail CPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/cpl`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail CPL"}
	singularName={"CPL"}
	items={{...cPLDataDetail}}
	isLoading={isLoading.detailCPL}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailCPL {...{ data : { ...cPLDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Daftar CPMK"}
	singularName={"CPMK"}
	items={[bobot]}
	isLoading={isLoading.daftarCPMK}
>
	<CPMKTable
		
		bobot={bobot}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailCPLPage

