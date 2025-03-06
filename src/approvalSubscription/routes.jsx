/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ApprovalSubscriptionPage from './containers/ApprovalSubscriptionPage'

const approvalSubscriptionRoutes = [
{ 
	path: "/approvalsubscription",
	element: <RequireAuth permissionNeeded="SubscriptionApproveIndustri" ><ApprovalSubscriptionPage/></RequireAuth>
}

	

]

export default approvalSubscriptionRoutes
