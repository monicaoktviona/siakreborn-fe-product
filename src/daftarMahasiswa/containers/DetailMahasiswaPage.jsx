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

import DetailMahasiswa from '../components/DetailMahasiswa'
import getDetailDataMahasiswa from '../services/getDetailDataMahasiswa'
const DetailMahasiswaPage = props => {
const [isLoading, setIsLoading] = useState({
	detailMahasiswa: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailDataMahasiswa, setDetailDataMahasiswa] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailMahasiswa: true}))
			const { data: detailDataMahasiswa } = await getDetailDataMahasiswa({ id, parameter })
			setDetailDataMahasiswa(detailDataMahasiswa.data)
		} finally {
			setIsLoading(prev => ({...prev, detailMahasiswa: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Mahasiswa Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/daftarmahasiswa
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
	title={"Detail Mahasiswa"}
	singularName={"Mahasiswa"}
	items={{...detailDataMahasiswa}}
	isLoading={isLoading.detailMahasiswa}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailMahasiswa {...{ data : { ...detailDataMahasiswa }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailMahasiswaPage

