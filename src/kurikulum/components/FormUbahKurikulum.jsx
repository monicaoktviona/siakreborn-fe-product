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
import updateKurikulum from '../services/updateKurikulum'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormUbahKurikulum = ({ 
	kurikulumData
, 	programStudiSelectionField
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: kurikulumData })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateKurikulum({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/kurikulum/${kurikulumData.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Ubah Kurikulum" 
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
		            defaultValue={kurikulumData.kode}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="noSK"
		        name="noSK"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nomor SK"
		            placeholder="Masukkan nomor sk"
		            defaultValue={kurikulumData.noSK}	            fieldState={fieldState}
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
		            defaultValue={kurikulumData.status}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="profilLulusan"
		        name="profilLulusan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Profil Lulusan"
		            placeholder="Masukkan profil lulusan"
		            defaultValue={kurikulumData.profilLulusan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="programStudiId"
	        name="programStudiId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Program Studi"
	            options={programStudiSelectionField}
	            placeholder="Masukkan program studi"
					fieldState={fieldState}
					defaultValue={kurikulumData.programStudiId}
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

export default FormUbahKurikulum
