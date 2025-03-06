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
import StudiTable from "../components/StudiTable";

import getProgramStudiDataList from '../services/getProgramStudiDataList'
const DaftarProgramStudiPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	programStudi: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [programStudiDataList, setProgramStudiDataList] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, programStudi: true}))
				const { data: programStudiDataList } = await getProgramStudiDataList()
				setProgramStudiDataList(programStudiDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, programStudi: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Program Studi Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateProgramStudi") &&  (
			  	  <Link to={`/programstudi/tambah
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah Program Studi
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Program Studi"}
	singularName={"Studi"}
	items={[programStudiDataList]}
	isLoading={isLoading.programStudi}
>
	<StudiTable
		
		programStudiDataList={programStudiDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarProgramStudiPage

