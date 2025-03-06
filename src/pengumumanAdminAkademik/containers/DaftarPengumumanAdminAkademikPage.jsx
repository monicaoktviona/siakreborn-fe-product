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

import getListPengumumanAdminAkademikDataBinding from '../services/getListPengumumanAdminAkademikDataBinding'
const DaftarPengumumanAdminAkademikPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listPengumumanAdminAkademik: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listPengumumanAdminAkademikDataBinding, setListPengumumanAdminAkademikDataBinding] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listPengumumanAdminAkademik: true}))
				const { data: listPengumumanAdminAkademikDataBinding } = await getListPengumumanAdminAkademikDataBinding()
				setListPengumumanAdminAkademikDataBinding(listPengumumanAdminAkademikDataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listPengumumanAdminAkademik: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar Pengumuman Admin Akademik Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	{checkPermission("SaveInformasiAkademik") &&  (
			  	  <Link to={`/pengumumanakademik/post
			  	  `}>
			  	  	<Button className="p-2" variant="primary">
			  	  	  Post Pengumuman Admin Akademik
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Pengumuman Admin Akademik"}
	singularName={"Pengumuman"}
	items={[listPengumumanAdminAkademikDataBinding]}
	isLoading={isLoading.listPengumumanAdminAkademik}
>
	<PengumumanCard
		listPengumumanAdminAkademikDataBinding={listPengumumanAdminAkademikDataBinding}
		
  	/>
</Layouts.ListContainerCardLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarPengumumanAdminAkademikPage

