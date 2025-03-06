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

import getLaporanCPLDataList from '../services/getLaporanCPLDataList'
const LaporanCPLPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	dataLaporanCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [laporanCPLDataList, setLaporanCPLDataList] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, dataLaporanCPL: true}))
				const { data: laporanCPLDataList } = await getLaporanCPLDataList()
				setLaporanCPLDataList(laporanCPLDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, dataLaporanCPL: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Laporan CPL Page")
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
	title={"Data Laporan CPL"}
	singularName={"Laporan"}
	items={[laporanCPLDataList]}
	isLoading={isLoading.dataLaporanCPL}
>
	<LaporanTable
		
		laporanCPLDataList={laporanCPLDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default LaporanCPLPage

