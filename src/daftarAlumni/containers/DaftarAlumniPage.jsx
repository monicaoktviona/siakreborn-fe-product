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
import AlumniTable from "../components/AlumniTable";

import getAlumniDataList from '../services/getAlumniDataList'
import getTahunLulusSelectionField from '../services/getTahunLulusSelectionField'
const DaftarAlumniPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableAlumni: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [alumniDataList, setAlumniDataList] = useState()
const [tahunLulusSelectionField, setTahunLulusSelectionField] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableAlumni: true}))
				const { data: alumniDataList } = await getAlumniDataList({  })
				const { data: tahunLulusSelectionField } = await getTahunLulusSelectionField({  })
				setAlumniDataList(alumniDataList.data)
				setTahunLulusSelectionField(tahunLulusSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, tableAlumni: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Alumni Page")
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
	title={"Table Alumni"}
	singularName={"Alumni"}
	items={[alumniDataList, tahunLulusSelectionField]}
	isLoading={isLoading.tableAlumni}
>
	<AlumniTable
		
		alumniDataList={alumniDataList}
		tahunLulusSelectionField={tahunLulusSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarAlumniPage

