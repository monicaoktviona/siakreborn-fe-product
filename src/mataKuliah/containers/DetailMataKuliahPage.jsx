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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import DetailMataKuliah from '../components/DetailMataKuliah'
import getMataKuliahDataDetail from '../services/getMataKuliahDataDetail'
import CPMKTable from "../components/CPMKTable";

import getCPMKDataList from '../services/getCPMKDataList'
import PrasyaratTable from "../components/PrasyaratTable";

import getPrasyaratMataKuliahDataList from '../services/getPrasyaratMataKuliahDataList'
const DetailMataKuliahPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailMataKuliah: false,
	daftarCPMK: false,
	daftarPrasyaratMataKuliah: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mataKuliahDataDetail, setMataKuliahDataDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailMataKuliah: true}))
			const { data: mataKuliahDataDetail } = await getMataKuliahDataDetail({ id })
			setMataKuliahDataDetail(mataKuliahDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailMataKuliah: false}))
		}
	}
	fetchData()
}, [])
const [cPMKDataList, setCPMKDataList] = useState()
	
	
	


useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarCPMK: true}))
				const { data: cPMKDataList } = await getCPMKDataList({ mataKuliahId })
				setCPMKDataList(cPMKDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarCPMK: false}))
			}
		}
		fetchData()
  	}, [])
const [prasyaratMataKuliahDataList, setPrasyaratMataKuliahDataList] = useState()
	
	
	


useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarPrasyaratMataKuliah: true}))
				const { data: prasyaratMataKuliahDataList } = await getPrasyaratMataKuliahDataList({ mataKuliahId })
				setPrasyaratMataKuliahDataList(prasyaratMataKuliahDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarPrasyaratMataKuliah: false}))
			}
		}
		if (checkPermission("ReadMataKuliahPrasyarat")) { 
			fetchData()
		}
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Mata Kuliah Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/matakuliah
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			  	
			  <Layouts.ViewContainerButtonLayout>
			  	{checkPermission("SaveMataKuliahPrasyarat") &&  (
			  	  <Link to={`/matakuliah/:id/prasyarat/tambah
			  	  `}>
			  	  	<Button className="p-2 w-full" variant="primary">
			  	  	  Tambah Prasyarat
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Mata Kuliah"}
	singularName={"Mata"}
	items={{...mataKuliahDataDetail}}
	isLoading={isLoading.detailMataKuliah}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailMataKuliah {...{ data : { ...mataKuliahDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Daftar CPMK"}
	singularName={"CPMK"}
	items={[cPMKDataList]}
	isLoading={isLoading.daftarCPMK}
>
	<CPMKTable
		cPMKDataList={cPMKDataList}
		
	/>
</Layouts.ListContainerTableLayout>
{ checkPermission("ReadMataKuliahPrasyarat") && ( 
<Layouts.ListContainerTableLayout
	title={"Daftar Prasyarat Mata Kuliah"}
	singularName={"Prasyarat"}
	items={[prasyaratMataKuliahDataList]}
	isLoading={isLoading.daftarPrasyaratMataKuliah}
>
	<PrasyaratTable
		prasyaratMataKuliahDataList={prasyaratMataKuliahDataList}
		
	/>
</Layouts.ListContainerTableLayout>
)}

	</Layouts.ViewContainerLayout>
  )
}
export default DetailMataKuliahPage

