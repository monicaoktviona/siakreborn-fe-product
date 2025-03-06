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
import CPMKTable from "../components/CPMKTable";

import getCPMKDataList from '../services/getCPMKDataList'
import getCPLSelectionField from '../services/getCPLSelectionField'
import getMataKuliahSelectionField from '../services/getMataKuliahSelectionField'
const DaftarCPMKPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPMKDataList, setCPMKDataList] = useState()
const [cPLSelectionField, setCPLSelectionField] = useState()
const [mataKuliahSelectionField, setMataKuliahSelectionField] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarCPMK: true}))
				const { data: cPMKDataList } = await getCPMKDataList()
				const { data: cPLSelectionField } = await getCPLSelectionField()
				const { data: mataKuliahSelectionField } = await getMataKuliahSelectionField()
				setCPMKDataList(cPMKDataList.data)
				setCPLSelectionField(cPLSelectionField.data)
				setMataKuliahSelectionField(mataKuliahSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarCPMK: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar CPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/cpmk/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah CPMK
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Daftar CPMK"}
	singularName={"CPMK"}
	items={[cPMKDataList, cPLSelectionField, mataKuliahSelectionField]}
	isLoading={isLoading.daftarCPMK}
>
	<CPMKTable
		
		cPMKDataList={cPMKDataList}
		cPLSelectionField={cPLSelectionField}
		mataKuliahSelectionField={mataKuliahSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarCPMKPage

