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
import SemuaTable from "../components/SemuaTable";

import getTahunLulusSelectionField from '../services/getTahunLulusSelectionField'
import getAlumniDataList from '../services/getAlumniDataList'
const DaftarSemuaAlumniPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableSemuaAlumni: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [tahunLulusSelectionField, setTahunLulusSelectionField] = useState()
const [alumniDataList, setAlumniDataList] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableSemuaAlumni: true}))
				const { data: tahunLulusSelectionField } = await getTahunLulusSelectionField()
				const { data: alumniDataList } = await getAlumniDataList()
				setTahunLulusSelectionField(tahunLulusSelectionField.data)
				setAlumniDataList(alumniDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableSemuaAlumni: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Semua Alumni Page")
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
	title={"Table Semua Alumni"}
	singularName={"Semua"}
	items={[tahunLulusSelectionField, alumniDataList]}
	isLoading={isLoading.tableSemuaAlumni}
>
	<SemuaTable
		
		tahunLulusSelectionField={tahunLulusSelectionField}
		alumniDataList={alumniDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarSemuaAlumniPage

