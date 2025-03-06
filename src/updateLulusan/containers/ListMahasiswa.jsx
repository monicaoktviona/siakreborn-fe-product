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
import MahasiswaTable from "../components/MahasiswaTable";

import getMahasiswaDataList from '../services/getMahasiswaDataList'
const ListMahasiswa = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableMahasiswa: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mahasiswaDataList, setMahasiswaDataList] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMahasiswa: true}))
				const { data: mahasiswaDataList } = await getMahasiswaDataList({  })
				setMahasiswaDataList(mahasiswaDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMahasiswa: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("List Mahasiswa")
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
	title={"Table Mahasiswa"}
	singularName={"Mahasiswa"}
	items={[mahasiswaDataList]}
	isLoading={isLoading.tableMahasiswa}
>
	<MahasiswaTable
		
		mahasiswaDataList={mahasiswaDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ListMahasiswa

