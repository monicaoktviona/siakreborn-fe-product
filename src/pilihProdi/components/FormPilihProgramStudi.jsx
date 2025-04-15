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
import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";
//added code
import { useCookies } from "react-cookie";

const FormPilihProgramStudi = ({ 
	pilihProdi
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()

  // menambahkan untuk keperluan cookies
  const [cookies, setCookie] = useCookies(["selectedProdi"]);
  const handleProdiChange = (e) => {
    const selectedValue = e?.target?.value; 
    setCookie("selectedProdi", selectedValue, { path: "/" });
    console.log("Program Studi id dipilih:", selectedValue); 

    navigate("/"); 
  };
  
  return (
	  <Layouts.FormComponentLayout
		  title="Pilih Program Studi" 
		  onSubmit={handleSubmit()}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  
		  <Controller
		    key="programStudiId"
	        name="programStudiId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Pilihan Program Studi"
	            options={pilihProdi}
	            placeholder="Masukkan pilihan program studi"
					fieldState={fieldState}
	            {...field}
              // added code
              onChange={(e) => {
                field.onChange(e);
                handleProdiChange(e); // Simpan ke cookies dan redirect
              }}
					isRequired={false}
	          />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
	    ]}
	  />
  )
}

export default FormPilihProgramStudi
