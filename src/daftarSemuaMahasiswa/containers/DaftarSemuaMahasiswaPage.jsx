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

import getMahasiswaDataList from '../services/getMahasiswaDataList'
import getAngkatanSelectionField from '../services/getAngkatanSelectionField'
const DaftarSemuaMahasiswaPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableSemuaMahasiswa: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mahasiswaDataList, setMahasiswaDataList] = useState()
const [angkatanSelectionField, setAngkatanSelectionField] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableSemuaMahasiswa: true}))
				const { data: mahasiswaDataList } = await getMahasiswaDataList()
				const { data: angkatanSelectionField } = await getAngkatanSelectionField()
				setMahasiswaDataList(mahasiswaDataList.data)
				setAngkatanSelectionField(angkatanSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, tableSemuaMahasiswa: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Semua Mahasiswa Page")
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
	title={"Table Semua Mahasiswa"}
	singularName={"Semua"}
	items={[mahasiswaDataList, angkatanSelectionField]}
	isLoading={isLoading.tableSemuaMahasiswa}
>
	<SemuaTable
		
		mahasiswaDataList={mahasiswaDataList}
		angkatanSelectionField={angkatanSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarSemuaMahasiswaPage

