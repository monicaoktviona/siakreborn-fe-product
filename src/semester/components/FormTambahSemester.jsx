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
import saveKurikulumSemesterSemester from '../services/saveKurikulumSemesterSemester'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahSemester = ({ 
	kurikulum
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    const kurikulumIds = cleanData.kurikulumIds.split(",");
    saveKurikulumSemesterSemester({
      ...cleanData,
      kurikulumIds,
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
		  title="Tambah Semester" 
		  onSubmit={handleSubmit(tambah)}
	
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
		            fieldState={fieldState}
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
		            fieldState={fieldState}
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
		            fieldState={fieldState}
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
		            fieldState={fieldState}
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
  )
}

export default FormTambahSemester
