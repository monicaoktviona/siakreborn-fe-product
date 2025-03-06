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
import saveInformasiAkademik from '../services/saveInformasiAkademik'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormPostAdminAkademik = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const post = (data) => {
    const cleanData = cleanFormData(data)
    saveInformasiAkademik({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/pengumumanakademik`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Post Admin Akademik" 
		  onSubmit={handleSubmit(post)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  ]}
	
		  itemsEvents={[
				<Button key="Post" type="submit" variant="primary">Post</Button>
	    ]}
	  />
  )
}

export default ModifiedFormFormPostAdminAkademik
