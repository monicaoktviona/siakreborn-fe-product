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
import FormUbahKelas from '../components/FormUbahKelas'

import getKelasData from '../services/getKelasData'
import getMataKuliah from '../services/getMataKuliah'
import getSemester from '../services/getSemester'
const UbahKelasPage = props => {

	const [isLoading, setIsLoading] = useState({
	ubahKelas: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get("id");
const [kelasData, setKelasData] = useState()
const [mataKuliah, setMataKuliah] = useState()
const [semester, setSemester] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahKelas: true}))
	  const { data: kelasDataResponse } = await getKelasData({ kelasId:id });
      const { data: mataKuliahResponse } = await getMataKuliah({ kelasId:id });
      const { data: semesterResponse } = await getSemester({ kelasId:id });
	    setKelasData(kelasDataResponse.data)
	    setMataKuliah(mataKuliahResponse.data)
	    setSemester(semesterResponse.data)


	    setIsLoading(prev => ({...prev, ubahKelas: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Kelas Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			<Link to={`/kelas/${id}`}>
              {" "}
              <Button className="p-4" variant="secondary">
                Kembali
              </Button>
            </Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Kelas"}
		isLoading={isLoading.ubahKelas}
	>
		{kelasData && mataKuliah && semester ? 
		(<>
		 <FormUbahKelas
			{...{ 
				kelasData
, 				mataKuliah
, 				semester
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahKelasPage

