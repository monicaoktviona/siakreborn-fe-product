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
import MKTable from "../components/MKTable";

import getMKRiwayatAkademisDataList from '../services/getMKRiwayatAkademisDataList'
const BerdasarkanMataKuliah = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableMKRiwayatAkademis: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mKRiwayatAkademisDataList, setMKRiwayatAkademisDataList] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMKRiwayatAkademis: true}))
				const { data: mKRiwayatAkademisDataList } = await getMKRiwayatAkademisDataList({  })
				setMKRiwayatAkademisDataList(mKRiwayatAkademisDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMKRiwayatAkademis: false}))
			}
		}
		checkPermission("ReadKelasMahasiswaMe") && fetchData();
	}, [])

	
	useEffect(() => {
		setTitle("Berdasarkan Mata Kuliah")
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
	title={"Table MK Riwayat Akademis"}
	singularName={"MK"}
	items={[mKRiwayatAkademisDataList]}
	isLoading={isLoading.tableMKRiwayatAkademis}
>
	<MKTable
		
		mKRiwayatAkademisDataList={mKRiwayatAkademisDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BerdasarkanMataKuliah

