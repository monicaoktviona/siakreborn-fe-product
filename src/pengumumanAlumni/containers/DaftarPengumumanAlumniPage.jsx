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
import PengumumanCard from "../components/PengumumanCard";

import getListPengumumanAlumniDataBinding from '../services/getListPengumumanAlumniDataBinding'
const DaftarPengumumanAlumniPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listPengumumanAlumni: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listPengumumanAlumniDataBinding, setListPengumumanAlumniDataBinding] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listPengumumanAlumni: true}))
				const { data: listPengumumanAlumniDataBinding } = await getListPengumumanAlumniDataBinding()
				setListPengumumanAlumniDataBinding(listPengumumanAlumniDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listPengumumanAlumni: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Pengumuman Alumni Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("SaveInformasiAlumni") &&  (
			  	  <Link to={`/pengumumanalumni/post
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Post Pengumuman Alumni
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Pengumuman Alumni"}
	singularName={"Pengumuman"}
	items={[listPengumumanAlumniDataBinding]}
	isLoading={isLoading.listPengumumanAlumni}
>
	<PengumumanCard
		listPengumumanAlumniDataBinding={listPengumumanAlumniDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarPengumumanAlumniPage

