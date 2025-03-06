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
import ModifiedFormTambahCPL from '../components/ModifiedFormTambahCPL'

import getKurikulum from '../services/getKurikulum'
const TambahCPLPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahCPL: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [kurikulum, setKurikulum] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahCPL: true}))
		const { data: kurikulumResponse } = await getKurikulum({  })

	    setKurikulum(kurikulumResponse.data)


	    setIsLoading(prev => ({...prev, tambahCPL: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah CPL Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/cpl
			  	`}>
			  		<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"CPL"}
		isLoading={isLoading.tambahCPL}
	>
		{kurikulum ? 
		(<>
		 <ModifiedFormTambahCPL
			{...{ 
				kurikulum
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahCPLPage

