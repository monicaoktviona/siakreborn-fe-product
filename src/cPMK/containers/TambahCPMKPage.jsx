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
import ModifiedFormTambahCPMK from '../components/ModifiedFormTambahCPMK'

import getCPL from '../services/getCPL'
import getMataKuliah from '../services/getMataKuliah'
const TambahCPMKPage = props => {
const [isLoading, setIsLoading] = useState({
	tambahCPMK: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [cPL, setCPL] = useState()
const [mataKuliah, setMataKuliah] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahCPMK: true}))
		const { data: cPLResponse } = await getCPL({  })
		const { data: mataKuliahResponse } = await getMataKuliah({  })

	    setCPL(cPLResponse.data)
	    setMataKuliah(mataKuliahResponse.data)


	    setIsLoading(prev => ({...prev, tambahCPMK: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah CPMK Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/cpmk
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
		singularName={"CPMK"}
		isLoading={isLoading.tambahCPMK}
	>
		{cPL && mataKuliah ? 
		(<>
		 <ModifiedFormTambahCPMK
			{...{ 
				cPL
, 				mataKuliah
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahCPMKPage

