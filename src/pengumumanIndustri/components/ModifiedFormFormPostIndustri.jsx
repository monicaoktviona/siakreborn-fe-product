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
import saveInformasiIndustri from '../services/saveInformasiIndustri'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormPostIndustri = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const post = (data) => {
    const cleanData = cleanFormData(data)
    saveInformasiIndustri({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/pengumumanindustri`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Post Industri" 
		  onSubmit={handleSubmit(post)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="judul"
		        name="judul"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Judul"
		            placeholder="Masukkan judul"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="deskripsi"
		        name="deskripsi"
		        control={control}
		        render={({ field, fieldState }) => (
				  <RichTextField
		            label="Deskripsi"
		            placeholder="Masukkan deskripsi"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Post" type="submit" variant="primary">Post</Button>
	    ]}
	  />
  )
}

export default ModifiedFormFormPostIndustri
