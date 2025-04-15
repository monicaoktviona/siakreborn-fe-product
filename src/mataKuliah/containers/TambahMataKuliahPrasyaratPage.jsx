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
import FormTambahMataKuliahPrasyarat from '../components/FormTambahMataKuliahPrasyarat'

import getMataKuliah from '../services/getMataKuliah'
import getSyarat from '../services/getSyarat'
const TambahMataKuliahPrasyaratPage = props => {
const { parentMataKuliahId } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tambahMataKuliahPrasyarat: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [mataKuliah, setMataKuliah] = useState()
const [syarat, setSyarat] = useState()
const { id } = useParams();

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahMataKuliahPrasyarat: true}))
		const { data: mataKuliahResponse } = await getMataKuliah({ parentMataKuliahId: id  })
		const { data: syaratResponse } = await getSyarat({ })

	    setMataKuliah(mataKuliahResponse.data)
	    setSyarat(syaratResponse.data)


	    setIsLoading(prev => ({...prev, tambahMataKuliahPrasyarat: false}))
    }
	if (checkPermission("SaveMataKuliahPrasyarat")) { 
		fetch()
	}
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Mata Kuliah Prasyarat Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/matakuliah/${id}
			  	`}>
			  		<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
{ checkPermission("SaveMataKuliahPrasyarat") && ( 
	<Layouts.FormContainerLayout
		singularName={"Mata"}
		isLoading={isLoading.tambahMataKuliahPrasyarat}
	>
		{mataKuliah && syarat ? 
		(<>
		 <FormTambahMataKuliahPrasyarat
			{...{ 
				mataKuliah
, 				syarat
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

)}

	</Layouts.ViewContainerLayout>
  )
}
export default TambahMataKuliahPrasyaratPage

