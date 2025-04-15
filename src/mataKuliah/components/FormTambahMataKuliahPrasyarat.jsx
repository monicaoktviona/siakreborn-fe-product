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
import saveMataKuliahPrasyarat from '../services/saveMataKuliahPrasyarat'
import { useParams } from "react-router";
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahMataKuliahPrasyarat = ({ 
	mataKuliah
, 	syarat
 }) => {
  
  
  
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: mataKuliah })
  
  
  
  
  
  
  const { id } = useParams();
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveMataKuliahPrasyarat({
	  parentMataKuliahId: id,
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/matakuliah/${id}`)
  	notifySuccess(`Save MataKuliahPrasyarat berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Tambah Mata Kuliah Prasyarat" 
		  onSubmit={handleSubmit(tambah)}
	
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
					defaultValue={mataKuliah.mataKuliahId}
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
					defaultValue={mataKuliah.syarat}
	            {...field}
					isRequired={false}
	          />
	
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Tambah" type="submit" variant="primary">Tambah</Button>
	    ]}
	  />
	    
	</div>
  )
}

export default FormTambahMataKuliahPrasyarat
