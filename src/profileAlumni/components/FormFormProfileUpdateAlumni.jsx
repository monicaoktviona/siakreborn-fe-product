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
import updateAlumni from '../services/updateAlumni'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormFormProfileUpdateAlumni = ({ 
	dataAlumniUpdate
, 	makePublic
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataAlumniUpdate })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateAlumni({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/profilealumni`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Profile Update Alumni" 
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
					disabled
		            defaultValue={dataAlumniUpdate.nama}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="npm"
		        name="npm"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="NPM"
		            placeholder="Masukkan npm"
					disabled
		            defaultValue={dataAlumniUpdate.npm}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="email"
		        name="email"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Email"
		            placeholder="Masukkan email"
		            defaultValue={dataAlumniUpdate.email}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="tempatKerja"
		        name="tempatKerja"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tempat Kerja"
		            placeholder="Masukkan tempat kerja"
		            defaultValue={dataAlumniUpdate.tempatKerja}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="pekerjaan"
		        name="pekerjaan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Pekerjaan"
		            placeholder="Masukkan pekerjaan"
		            defaultValue={dataAlumniUpdate.pekerjaan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="tahunLulus"
		        name="tahunLulus"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tahun Lulus"
		            placeholder="Masukkan tahun lulus"
					disabled
		            defaultValue={dataAlumniUpdate.tahunLulus}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="portofolioUrl"
		        name="portofolioUrl"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Link Portofolio"
		            placeholder="Masukkan link portofolio"
		            defaultValue={dataAlumniUpdate.portofolioUrl}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="linkedinUrl"
		        name="linkedinUrl"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Link LinkedIn"
		            placeholder="Masukkan link linkedin"
		            defaultValue={dataAlumniUpdate.linkedinUrl}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="isPublic"
	        name="isPublic"
	        control={control}
	        render={({ field, fieldState }) => (
					<MultiSelectionField
				
	            label="Izinkan Akses Profile kepada Alumni dan Industri"
	            options={makePublic}
	            placeholder="Masukkan izinkan akses profile kepada alumni dan industri"
					fieldState={fieldState}
					defaultValue={dataAlumniUpdate.isPublic}
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

export default FormFormProfileUpdateAlumni
