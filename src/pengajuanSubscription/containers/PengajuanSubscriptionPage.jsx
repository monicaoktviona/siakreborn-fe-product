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
import DaftarCard from "../components/DaftarCard";

import getPaketSubscriptionBinding from '../services/getPaketSubscriptionBinding'
import FormFormPengajuanSubscription from '../components/FormFormPengajuanSubscription'

import getSubscription from '../services/getSubscription'
const PengajuanSubscriptionPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	listDaftarPaketSubscription: false,
	formPengajuanSubscription: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [paketSubscriptionBinding, setPaketSubscriptionBinding] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, listDaftarPaketSubscription: true}))
				const { data: paketSubscriptionBinding } = await getPaketSubscriptionBinding()
				setPaketSubscriptionBinding(paketSubscriptionBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, listDaftarPaketSubscription: false}))
			}
		}
		fetchData()	
  	}, [])
const [subscription, setSubscription] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, formPengajuanSubscription: true}))
		const { data: subscriptionResponse } = await getSubscription({  })

	    setSubscription(subscriptionResponse.data)


	    setIsLoading(prev => ({...prev, formPengajuanSubscription: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Pengajuan Subscription Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerCardLayout
	title={"List Daftar Paket Subscription"}
	singularName={"Daftar"}
	items={[paketSubscriptionBinding]}
	isLoading={isLoading.listDaftarPaketSubscription}
>
	<DaftarCard
		paketSubscriptionBinding={paketSubscriptionBinding}
		
  	/>
</Layouts.ListContainerCardLayout>
<Layouts.FormContainerLayout
		singularName={"Pengajuan"}
		isLoading={isLoading.formPengajuanSubscription}
	>
		{subscription ? 
		(<>
		 <FormFormPengajuanSubscription
			{...{ 
				subscription
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default PengajuanSubscriptionPage

