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
import IndustriTable from "../components/IndustriTable";

import getIndustriDataList from '../services/getIndustriDataList'
import getDomainPerusahaanSelectionField from '../services/getDomainPerusahaanSelectionField'
const DaftarIndustriPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableIndustri: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [industriDataList, setIndustriDataList] = useState()
const [domainPerusahaanSelectionField, setDomainPerusahaanSelectionField] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableIndustri: true}))
				const { data: industriDataList } = await getIndustriDataList()
				const { data: domainPerusahaanSelectionField } = await getDomainPerusahaanSelectionField()
				setIndustriDataList(industriDataList.data)
				setDomainPerusahaanSelectionField(domainPerusahaanSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, tableIndustri: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Industri Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Industri"}
	singularName={"Industri"}
	items={[industriDataList, domainPerusahaanSelectionField]}
	isLoading={isLoading.tableIndustri}
>
	<IndustriTable
		
		industriDataList={industriDataList}
		domainPerusahaanSelectionField={domainPerusahaanSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarIndustriPage

