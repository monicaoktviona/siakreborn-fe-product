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
import SemesterTable from "../components/SemesterTable";

import getSemesterDataList from '../services/getSemesterDataList'
const DaftarSemesterPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarSemester: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [semesterDataList, setSemesterDataList] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarSemester: true}))
				const { data: semesterDataList } = await getSemesterDataList()
				setSemesterDataList(semesterDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarSemester: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Semester Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreateSemester") &&  (
			  	  <Link to={`/semester/tambah
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Tambah Semester
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Daftar Semester"}
	singularName={"Semester"}
	items={[semesterDataList]}
	isLoading={isLoading.daftarSemester}
>
	<SemesterTable
		
		semesterDataList={semesterDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarSemesterPage

