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
import LaporanTable from "../components/LaporanTable";

import getKelasSelectionField from '../services/getKelasSelectionField'
import getLaporanCPMKDataList from '../services/getLaporanCPMKDataList'
const LaporanCPMKPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	dataLaporanCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [kelasSelectionField, setKelasSelectionField] = useState()
const [laporanCPMKDataList, setLaporanCPMKDataList] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, dataLaporanCPMK: true}))
				const { data: kelasSelectionField } = await getKelasSelectionField()
				const { data: laporanCPMKDataList } = await getLaporanCPMKDataList()
				setKelasSelectionField(kelasSelectionField.data)
				setLaporanCPMKDataList(laporanCPMKDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, dataLaporanCPMK: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Laporan CPMK Page")
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
	title={"Data Laporan CPMK"}
	singularName={"Laporan"}
	items={[kelasSelectionField, laporanCPMKDataList]}
	isLoading={isLoading.dataLaporanCPMK}
>
	<LaporanTable
		
		kelasSelectionField={kelasSelectionField}
		laporanCPMKDataList={laporanCPMKDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LaporanCPMKPage

