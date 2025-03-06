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

import DetailsMahasiswa from '../components/DetailsMahasiswa'
import getDetailDataMahasiswa from '../services/getDetailDataMahasiswa'
const DetailMahasiswa = props => {
const [isLoading, setIsLoading] = useState({
	detailsMahasiswa: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailDataMahasiswa, setDetailDataMahasiswa] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailsMahasiswa: true}))
			const { data: detailDataMahasiswa } = await getDetailDataMahasiswa({ id })
			setDetailDataMahasiswa(detailDataMahasiswa.data)
		} finally {
			setIsLoading(prev => ({...prev, detailsMahasiswa: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Mahasiswa")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/verifikasimahasiswa
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
	title={"Details Mahasiswa"}
	singularName={"Mahasiswa"}
	items={{...detailDataMahasiswa}}
	isLoading={isLoading.detailsMahasiswa}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailsMahasiswa {...{ data : { ...detailDataMahasiswa }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailMahasiswa

