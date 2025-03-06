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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import TabRiwayat from '../components/TabRiwayat'
const DaftarRiwayatAkademisPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tabRiwayat: false,

	});
	const { setTitle } = useContext(HeaderContext);


	
	useEffect(() => {
		setTitle("Daftar Riwayat Akademis Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<TabRiwayat />

	</Layouts.ViewContainerLayout>
  )
}
export default DaftarRiwayatAkademisPage

