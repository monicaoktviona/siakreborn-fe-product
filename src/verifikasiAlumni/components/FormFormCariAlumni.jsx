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
import verifyAlumni from '../services/verifyAlumni'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormFormCariAlumni = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const search = (data) => {
    const cleanData = cleanFormData(data)
    verifyAlumni({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/verifikasialumni/detail/${data.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Cari Alumni" 
		  onSubmit={handleSubmit(search)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="npm"
		        name="npm"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="NPM"
		            placeholder="Masukkan npm"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="nama"
		        name="nama"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama"
		            placeholder="Masukkan nama"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Search" type="submit" variant="primary">Search</Button>
	    ]}
	  />
  )
}

export default FormFormCariAlumni
