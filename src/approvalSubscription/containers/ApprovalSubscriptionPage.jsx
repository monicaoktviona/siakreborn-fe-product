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
import ApprovalTable from "../components/ApprovalTable";

import getApprovalSubscriptionListData from '../services/getApprovalSubscriptionListData'
const ApprovalSubscriptionPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableApprovalSubscription: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [approvalSubscriptionListData, setApprovalSubscriptionListData] = useState()
	
useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableApprovalSubscription: true}))
				const { data: approvalSubscriptionListData } = await getApprovalSubscriptionListData()
				setApprovalSubscriptionListData(approvalSubscriptionListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableApprovalSubscription: false}))
			}
		}
		fetchData()	
  	}, [])

	
	useEffect(() => {
		setTitle("Approval Subscription Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Approval Subscription"}
	singularName={"Approval"}
	items={[approvalSubscriptionListData]}
	isLoading={isLoading.tableApprovalSubscription}
>
	<ApprovalTable
		
		approvalSubscriptionListData={approvalSubscriptionListData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ApprovalSubscriptionPage

