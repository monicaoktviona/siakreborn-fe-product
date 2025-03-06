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
import updateMahasiswa from '../services/updateMahasiswa'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormProfileUpdateMahasiswa = ({ 
	dataMahasiswaUpdate
, 	makePublic
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataMahasiswaUpdate })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateMahasiswa({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/profilemahasiswa`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Profile Update Mahasiswa" 
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
		            defaultValue={dataMahasiswaUpdate.nama}	            fieldState={fieldState}
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
		            defaultValue={dataMahasiswaUpdate.npm}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="tahunAngkatan"
		        name="tahunAngkatan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tahun Angkatan"
		            placeholder="Masukkan tahun angkatan"
					disabled
		            defaultValue={dataMahasiswaUpdate.tahunAngkatan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="statusAkademik"
		        name="statusAkademik"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Status Akademik"
		            placeholder="Masukkan status akademik"
					disabled
		            defaultValue={dataMahasiswaUpdate.statusAkademik}	            fieldState={fieldState}
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
					disabled
		            defaultValue={dataMahasiswaUpdate.email}	            fieldState={fieldState}
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
					defaultValue={dataMahasiswaUpdate.isPublic}
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

export default ModifiedFormFormProfileUpdateMahasiswa
