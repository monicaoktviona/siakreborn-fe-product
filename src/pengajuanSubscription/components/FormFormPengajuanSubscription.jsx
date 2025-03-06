/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import subscriptionRequestIndustri from '../services/subscriptionRequestIndustri'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormFormPengajuanSubscription = ({ 
	subscription
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const submit = (data) => {
    const cleanData = cleanFormData(data)
    subscriptionRequestIndustri({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/pengajuansubscription/detail/${data.subscriptionId}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Pengajuan Subscription" 
		  onSubmit={handleSubmit(submit)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  
		  <Controller
		    key="idSubscriptionPlan"
	        name="idSubscriptionPlan"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Pilihan Subscription"
	            options={subscription}
	            placeholder="Masukkan pilihan subscription"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Submit" type="submit" variant="primary">Submit</Button>
	    ]}
	  />
  )
}

export default FormFormPengajuanSubscription
