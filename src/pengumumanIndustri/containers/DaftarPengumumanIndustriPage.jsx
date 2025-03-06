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

import getListPengumumanIndustriDataBinding from '../services/getListPengumumanIndustriDataBinding'
const DaftarPengumumanIndustriPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listPengumumanindustri: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listPengumumanIndustriDataBinding, setListPengumumanIndustriDataBinding] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listPengumumanindustri: true}))
				const { data: listPengumumanIndustriDataBinding } = await getListPengumumanIndustriDataBinding()
				setListPengumumanIndustriDataBinding(listPengumumanIndustriDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listPengumumanindustri: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Pengumuman Industri Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("SaveInformasiIndustri") &&  (
			  	  <Link to={`/pengumumanindustri/post
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Post Pengumuman Industri
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Pengumuman industri"}
	singularName={"Pengumuman"}
	items={[listPengumumanIndustriDataBinding]}
	isLoading={isLoading.listPengumumanindustri}
>
	<PengumumanCard
		listPengumumanIndustriDataBinding={listPengumumanIndustriDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarPengumumanIndustriPage

