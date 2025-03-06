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
import TermTable from "../components/TermTable";

import getTermRiwayatAkademisDataList from '../services/getTermRiwayatAkademisDataList'
const BerdasarkanTerm = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableTermRiwayatAkademis: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [termRiwayatAkademisDataList, setTermRiwayatAkademisDataList] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableTermRiwayatAkademis: true}))
				const { data: termRiwayatAkademisDataList } = await getTermRiwayatAkademisDataList({  })
				setTermRiwayatAkademisDataList(termRiwayatAkademisDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableTermRiwayatAkademis: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Berdasarkan Term")
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
	title={"Table Term Riwayat Akademis"}
	singularName={"Term"}
	items={[termRiwayatAkademisDataList]}
	isLoading={isLoading.tableTermRiwayatAkademis}
>
	<TermTable
		
		termRiwayatAkademisDataList={termRiwayatAkademisDataList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BerdasarkanTerm

