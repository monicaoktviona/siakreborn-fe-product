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
import SubCPMKTable from "../components/SubCPMKTable";

import getSubCPMKDataList from '../services/getSubCPMKDataList'
const DaftarSubCPMKPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarSubCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [subCPMKDataList, setSubCPMKDataList] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarSubCPMK: true}))
				const { data: subCPMKDataList } = await getSubCPMKDataList()
				setSubCPMKDataList(subCPMKDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarSubCPMK: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar SubCPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/subcpmk/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah SubCPMK
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Daftar SubCPMK"}
	singularName={"SubCPMK"}
	items={[subCPMKDataList]}
	isLoading={isLoading.daftarSubCPMK}
>
	<SubCPMKTable
		
		subCPMKDataList={subCPMKDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarSubCPMKPage

