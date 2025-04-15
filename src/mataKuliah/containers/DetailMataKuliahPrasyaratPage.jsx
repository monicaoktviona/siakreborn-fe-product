/*
	Generated on 15/04/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useAuth } from '@/commons/auth';
import DetailMataKuliahPrasyarat from '../components/DetailMataKuliahPrasyarat'
import getPrasyaratMataKuliahDataDetail from '../services/getPrasyaratMataKuliahDataDetail'
const DetailMataKuliahPrasyaratPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailMataKuliahPrasyarat: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [prasyaratMataKuliahDataDetail, setPrasyaratMataKuliahDataDetail] = useState()
const { prasyaratId, id } = useParams();
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailMataKuliahPrasyarat: true}))
			const { data: prasyaratMataKuliahDataDetail } = await getPrasyaratMataKuliahDataDetail({ prasyaratId })
			setPrasyaratMataKuliahDataDetail(prasyaratMataKuliahDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailMataKuliahPrasyarat: false}))
		}
	}
	if (checkPermission("ReadMataKuliahPrasyarat")) { 
		fetchData()
	}
}, [])

	
	useEffect(() => {
		setTitle("Detail Mata Kuliah Prasyarat Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/matakuliah/${id}
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
{ checkPermission("ReadMataKuliahPrasyarat") && ( 
<Layouts.DetailContainerLayout
	title={"Detail Mata Kuliah Prasyarat"}
	singularName={"Mata"}
	items={{...prasyaratMataKuliahDataDetail}}
	isLoading={isLoading.detailMataKuliahPrasyarat}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailMataKuliahPrasyarat {...{ data : { ...prasyaratMataKuliahDataDetail }}} />
</Layouts.DetailContainerLayout>

)}

	</Layouts.ViewContainerLayout>
  )
}
export default DetailMataKuliahPrasyaratPage

