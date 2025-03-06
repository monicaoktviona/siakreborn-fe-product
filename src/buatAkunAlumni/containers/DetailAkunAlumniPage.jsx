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

import DetailsAkunAlumni from '../components/DetailsAkunAlumni'
import getAkunAlumniDataBinding from '../services/getAkunAlumniDataBinding'
const DetailAkunAlumniPage = props => {
const { email } = useParams()

	const [isLoading, setIsLoading] = useState({
	detailsAkunAlumni: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [akunAlumniDataBinding, setAkunAlumniDataBinding] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailsAkunAlumni: true}))
			const { data: akunAlumniDataBinding } = await getAkunAlumniDataBinding({ email })
			setAkunAlumniDataBinding(akunAlumniDataBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailsAkunAlumni: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Akun Alumni Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Details Akun Alumni"}
	singularName={"Akun"}
	items={{...akunAlumniDataBinding}}
	isLoading={isLoading.detailsAkunAlumni}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailsAkunAlumni {...{ data : { ...akunAlumniDataBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailAkunAlumniPage

