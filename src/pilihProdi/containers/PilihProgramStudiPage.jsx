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
import { useSearchParams } from "react-router";
import FormPilihProgramStudi from '../components/FormPilihProgramStudi'

import getPilihProdi from '../services/getPilihProdi'
const PilihProgramStudiPage = props => {
const [isLoading, setIsLoading] = useState({
	pilihProgramStudi: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [pilihProdi, setPilihProdi] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, pilihProgramStudi: true}))
		const { data: pilihProdiResponse } = await getPilihProdi({  })

	    setPilihProdi(pilihProdiResponse.data)


	    setIsLoading(prev => ({...prev, pilihProgramStudi: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Pilih Program Studi Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Program"}
		isLoading={isLoading.pilihProgramStudi}
	>
		{pilihProdi ? 
		(<>
		 <FormPilihProgramStudi
			{...{ 
				pilihProdi
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PilihProgramStudiPage

