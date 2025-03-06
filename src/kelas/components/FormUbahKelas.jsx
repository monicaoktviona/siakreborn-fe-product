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
import updateKelas from '../services/updateKelas'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahKelas = ({ 
	kelasData
, 	mataKuliah
, 	semester
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: kelasData })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateKelas({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/kelas/${kelasData.kelasId}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Ubah Kelas" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="nama"
		        name="nama"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama"
		            placeholder="Masukkan nama"
		            defaultValue={kelasData.nama}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="kapasitas"
		        name="kapasitas"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Kapasitas"
		            placeholder="Masukkan kapasitas"
					type="number"
		            defaultValue={kelasData.kapasitas}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="ruangan"
		        name="ruangan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Ruangan"
		            placeholder="Masukkan ruangan"
		            defaultValue={kelasData.ruangan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="jadwal"
		        name="jadwal"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Jadwal"
		            placeholder="Masukkan jadwal"
		            defaultValue={kelasData.jadwal}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="mataKuliahId"
	        name="mataKuliahId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Mata Kuliah"
	            options={mataKuliah}
	            placeholder="Masukkan mata kuliah"
					fieldState={fieldState}
					defaultValue={kelasData.mataKuliahId}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
	,
		  
		  <Controller
		    key="semesterId"
	        name="semesterId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Semester"
	            options={semester}
	            placeholder="Masukkan semester"
					fieldState={fieldState}
					defaultValue={kelasData.semesterId}
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
  )
}

export default FormUbahKelas
