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
import ModifiedFormUbahSubCPMK from '../components/ModifiedFormUbahSubCPMK'

import getSubCPMKUbah from '../services/getSubCPMKUbah'
import getCPMK from '../services/getCPMK'
const UbahSubCPMKPage = props => {

	const [isLoading, setIsLoading] = useState({
	ubahSubCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [subCPMKUbah, setSubCPMKUbah] = useState()
const [cPMK, setCPMK] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahSubCPMK: true}))
		const { data: subCPMKUbahResponse } = await getSubCPMKUbah({ id  })
		const { data: cPMKResponse } = await getCPMK({ id  })

	    setSubCPMKUbah(subCPMKUbahResponse.data)
	    setCPMK(cPMKResponse.data)


	    setIsLoading(prev => ({...prev, ubahSubCPMK: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah SubCPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/subcpmk/${id}
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
		singularName={"SubCPMK"}
		isLoading={isLoading.ubahSubCPMK}
	>
		{subCPMKUbah && cPMK ? 
		(<>
		 <ModifiedFormUbahSubCPMK
			{...{ 
				subCPMKUbah
, 				cPMK
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahSubCPMKPage

