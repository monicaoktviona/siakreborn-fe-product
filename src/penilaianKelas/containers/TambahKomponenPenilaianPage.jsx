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
import FormTambahKomponenPenilaian from '../components/FormTambahKomponenPenilaian'
const TambahKomponenPenilaianPage = props => {

	const [isLoading, setIsLoading] = useState({
	tambahKomponenPenilaian: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()

const { id } = useParams();


useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, tambahKomponenPenilaian: true}))


	    setIsLoading(prev => ({...prev, tambahKomponenPenilaian: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Tambah Komponen Penilaian Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/penilaian-kelas/${id}
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
		singularName={"Komponen"}
		isLoading={isLoading.tambahKomponenPenilaian}
	>
		<FormTambahKomponenPenilaian
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TambahKomponenPenilaianPage

