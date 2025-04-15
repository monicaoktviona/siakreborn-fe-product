/*
	Generated on 15/04/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import { useAuth } from '@/commons/auth';
import FormUbahMataKuliahPrasyarat from '../components/FormUbahMataKuliahPrasyarat'

import getMataKuliahPrasyaratUbah from '../services/getMataKuliahPrasyaratUbah'
import getMataKuliah from '../services/getMataKuliah'
import getSyarat from '../services/getSyarat'
const UbahMataKuliahPrasyaratPage = props => {
const { prasyaratId } = useParams()
const { id } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	ubahMataKuliahPrasyarat: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mataKuliahPrasyaratUbah, setMataKuliahPrasyaratUbah] = useState()
const [mataKuliah, setMataKuliah] = useState()
const [syarat, setSyarat] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahMataKuliahPrasyarat: true}))
		const { data: mataKuliahPrasyaratUbahResponse } = await getMataKuliahPrasyaratUbah({ prasyaratId  })
		const { data: mataKuliahResponse } = await getMataKuliah({ parentMataKuliahId: id  })
		const { data: syaratResponse } = await getSyarat({ })

	    setMataKuliahPrasyaratUbah(mataKuliahPrasyaratUbahResponse.data)
	    setMataKuliah(mataKuliahResponse.data)
	    setSyarat(syaratResponse.data)


	    setIsLoading(prev => ({...prev, ubahMataKuliahPrasyarat: false}))
    }
	if (checkPermission("UpdateMataKuliahPrasyarat")) { 
		fetch()
	}
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Mata Kuliah Prasyarat Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/matakuliah/${id}/prasyarat/${prasyaratId}
			  	`}>
			  		<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
{ checkPermission("UpdateMataKuliahPrasyarat") && ( 
	<Layouts.FormContainerLayout
		singularName={"Mata"}
		isLoading={isLoading.ubahMataKuliahPrasyarat}
	>
		{mataKuliahPrasyaratUbah && mataKuliah && syarat ? 
		(<>
		 <FormUbahMataKuliahPrasyarat
			{...{ 
				mataKuliahPrasyaratUbah
, 				mataKuliah
, 				syarat
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

)}

	</Layouts.ViewContainerLayout>
  )
}
export default UbahMataKuliahPrasyaratPage

