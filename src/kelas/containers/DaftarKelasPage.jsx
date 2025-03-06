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
import KelasTable from "../components/KelasTable";

import getKelasDataList from '../services/getKelasDataList'
const DaftarKelasPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarKelas: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [kelasDataList, setKelasDataList] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarKelas: true}))
				const { data: kelasDataList } = await getKelasDataList()
				setKelasDataList(kelasDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarKelas: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Kelas Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateKelas") &&  (
			  	  <Link to={`/kelas/tambah
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah Kelas
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Daftar Kelas"}
	singularName={"Kelas"}
	items={[kelasDataList]}
	isLoading={isLoading.daftarKelas}
>
	<KelasTable
		
		kelasDataList={kelasDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarKelasPage

