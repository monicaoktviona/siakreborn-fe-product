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
import FormUbahMataKuliah from '../components/FormUbahMataKuliah'

import getMataKuliahUbah from '../services/getMataKuliahUbah'
import getKurikulum from '../services/getKurikulum'
const UbahMataKuliahPage = props => {
const { id } = useParams()

	const [isLoading, setIsLoading] = useState({
	ubahMataKuliah: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [mataKuliahUbah, setMataKuliahUbah] = useState()
const [kurikulum, setKurikulum] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahMataKuliah: true}))
		const { data: mataKuliahUbahResponse } = await getMataKuliahUbah({ id  })
		const { data: kurikulumResponse } = await getKurikulum({ id  })

	    setMataKuliahUbah(mataKuliahUbahResponse.data)
	    setKurikulum(kurikulumResponse.data)


	    setIsLoading(prev => ({...prev, ubahMataKuliah: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Mata Kuliah Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/matakuliah/:id
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
		singularName={"Mata"}
		isLoading={isLoading.ubahMataKuliah}
	>
		{mataKuliahUbah && kurikulum ? 
		(<>
		 <FormUbahMataKuliah
			{...{ 
				mataKuliahUbah
, 				kurikulum
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahMataKuliahPage

