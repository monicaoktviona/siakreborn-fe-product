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
import DetailPenilaianMahasiswa from '../components/DetailPenilaianMahasiswa'
import getPenilaianDataDetail from '../services/getPenilaianDataDetail'
import DetailTable from "../components/DetailTable";

import getPenilaianMahasiswaDataList from '../services/getPenilaianMahasiswaDataList'
const DetailPenilaianMahasiswaPage = props => {
const { id } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	detailPenilaianMahasiswa: false,
	tableDetailNilai: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [penilaianDataDetail, setPenilaianDataDetail] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailPenilaianMahasiswa: true}))
			const { data: penilaianDataDetail } = await getPenilaianDataDetail({ id })
			setPenilaianDataDetail(penilaianDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailPenilaianMahasiswa: false}))
		}
	}
	 fetchData()
}, [])
const [penilaianMahasiswaDataList, setPenilaianMahasiswaDataList] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableDetailNilai: true}))
				const { data: penilaianMahasiswaDataList } = await getPenilaianMahasiswaDataList({ kelasId })
				setPenilaianMahasiswaDataList(penilaianMahasiswaDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableDetailNilai: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Detail Penilaian Mahasiswa Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/akademis/riwayat
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Detail Penilaian Mahasiswa"}
	singularName={"Penilaian"}
	items={{...penilaianDataDetail}}
	isLoading={isLoading.detailPenilaianMahasiswa}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailPenilaianMahasiswa {...{ data : { ...penilaianDataDetail }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Table Detail Nilai"}
	singularName={"Detail"}
	items={[penilaianMahasiswaDataList]}
	isLoading={isLoading.tableDetailNilai}
>
	<DetailTable
		
		penilaianMahasiswaDataList={penilaianMahasiswaDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailPenilaianMahasiswaPage

