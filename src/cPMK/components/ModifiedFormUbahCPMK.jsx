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
import updateCPMK from '../services/updateCPMK'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormUbahCPMK = ({ 
	cPMKUbah
, 	cPL
, 	mataKuliah
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: cPMKUbah })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateCPMK({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/cpmk/${cPMKUbah.id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Ubah CPMK" 
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
		            defaultValue={cPMKUbah.kode}	            fieldState={fieldState}
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
				  <InputField
		            label="Deskripsi"
		            placeholder="Masukkan deskripsi"
		            defaultValue={cPMKUbah.deskripsi}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="bobot"
		        name="bobot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Bobot"
		            placeholder="Masukkan bobot"
		            defaultValue={cPMKUbah.bobot}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="parentCPLId"
	        name="parentCPLId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Pilihan CPL"
	            options={cPL}
	            placeholder="Masukkan pilihan cpl"
					fieldState={fieldState}
					defaultValue={cPMKUbah.parentCPLId}
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
				
	            label="Pilihan Mata Kuliah"
	            options={mataKuliah}
	            placeholder="Masukkan pilihan mata kuliah"
					fieldState={fieldState}
					defaultValue={cPMKUbah.mataKuliahId}
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

export default ModifiedFormUbahCPMK
