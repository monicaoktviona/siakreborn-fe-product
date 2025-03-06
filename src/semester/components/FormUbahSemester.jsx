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
import updateSemester from '../services/updateSemester'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahSemester = ({ 
	semesterData
, 	kurikulum
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: semesterData })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateSemester({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/semester`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Ubah Semester" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="kode"
		        name="kode"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Kode"
		            placeholder="Masukkan kode"
		            defaultValue={semesterData.kode}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="status"
		        name="status"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Status"
		            placeholder="Masukkan status"
		            defaultValue={semesterData.status}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="tanggalMulai"
		        name="tanggalMulai"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal Mulai"
		            placeholder="Masukkan tanggal mulai"
		            defaultValue={semesterData.tanggalMulai}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="tanggalSelesai"
		        name="tanggalSelesai"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tanggal Selesai"
		            placeholder="Masukkan tanggal selesai"
		            defaultValue={semesterData.tanggalSelesai}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="kurikulumIds"
	        name="kurikulumIds"
	        control={control}
	        render={({ field, fieldState }) => (
					<MultiSelectionField
				
	            label="Kurikulum"
	            options={kurikulum}
	            placeholder="Masukkan kurikulum"
					fieldState={fieldState}
					defaultValue={semesterData.kurikulumIds}
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

export default FormUbahSemester
