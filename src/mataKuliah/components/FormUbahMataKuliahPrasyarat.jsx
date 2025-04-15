/*
	Generated on 15/04/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
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
import updateMataKuliahPrasyarat from '../services/updateMataKuliahPrasyarat'

import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahMataKuliahPrasyarat = ({ 
	mataKuliahPrasyaratUbah
, 	mataKuliah
, 	syarat
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: mataKuliahPrasyaratUbah })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateMataKuliahPrasyarat({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/matakuliah/${mataKuliahPrasyaratUbah.parentMataKuliahId}/prasyarat${mataKuliahPrasyaratUbah.id}`)
  	notifySuccess(`Update MataKuliahPrasyarat berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Ubah Mata Kuliah Prasyarat" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  
		  <Controller
		    key="mataKuliahId"
	        name="mataKuliahId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Pilihan Mata Kuliah"
	            options={mataKuliah}
	            placeholder="Masukkan pilihan mata kuliah"
					fieldState={fieldState}
					defaultValue={mataKuliahPrasyaratUbah.mataKuliahId}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
	,
		  
		  <Controller
		    key="syarat"
	        name="syarat"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Syarat"
	            options={syarat}
	            placeholder="Masukkan syarat"
					fieldState={fieldState}
					defaultValue={mataKuliahPrasyaratUbah.syarat}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Simpan" type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormUbahMataKuliahPrasyarat
