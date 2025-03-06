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
import akunAlumni from '../services/akunAlumni'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormFormBuatAkunAlumni = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const create = (data) => {
    const cleanData = cleanFormData(data)
    akunAlumni({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/buatakunalumni/detail/${data.email}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Buat Akun Alumni" 
		  onSubmit={handleSubmit(create)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="email"
		        name="email"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Email"
		            placeholder="Masukkan email"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Create" type="submit" variant="primary">Create</Button>
	    ]}
	  />
  )
}

export default FormFormBuatAkunAlumni
