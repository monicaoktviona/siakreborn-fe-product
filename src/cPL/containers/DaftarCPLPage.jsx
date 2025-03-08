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
import CPLTable from "../components/CPLTable";

import getCPLDataList from '../services/getCPLDataList'
import getKurikulumSelectionField from '../services/getKurikulumSelectionField'
const DaftarCPLPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	daftarCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPLDataList, setCPLDataList] = useState()
const [kurikulumSelectionField, setKurikulumSelectionField] = useState()
	

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, daftarCPL: true}))
				const { data: cPLDataList } = await getCPLDataList()
				const { data: kurikulumSelectionField } = await getKurikulumSelectionField()
				setCPLDataList(cPLDataList.data)
				setKurikulumSelectionField(kurikulumSelectionField.data)
			} finally {
				setIsLoading(prev => ({...prev, daftarCPL: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Daftar CPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			{checkPermission("CreateCPL") &&  (
			  	<Link to={`/cpl/tambah
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Tambah CPL
			  		</Button>
			  	</Link>
			  	
			)}
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Daftar CPL"}
	singularName={"CPL"}
	items={[cPLDataList, kurikulumSelectionField]}
	isLoading={isLoading.daftarCPL}
>
	<CPLTable
		
		cPLDataList={cPLDataList}
		kurikulumSelectionField={kurikulumSelectionField}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarCPLPage

