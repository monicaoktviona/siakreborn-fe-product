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
import updateIndustri from '../services/updateIndustri'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormProfileUpdateIndustri = ({ 
	dataIndustriUpdate
, 	listDomainPerusahaan
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: dataIndustriUpdate })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    updateIndustri({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/profileindustri`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Profile Update Industri" 
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
		            defaultValue={dataIndustriUpdate.nama}	            fieldState={fieldState}
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
		            defaultValue={dataIndustriUpdate.email}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="alamat"
		        name="alamat"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Alamat"
		            placeholder="Masukkan alamat"
		            defaultValue={dataIndustriUpdate.alamat}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="jumlahKaryawan"
		        name="jumlahKaryawan"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Size Company (Jumlah Karyawan)"
		            placeholder="Masukkan size company (jumlah karyawan)"
		            defaultValue={dataIndustriUpdate.jumlahKaryawan}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="tahunBerdiri"
		        name="tahunBerdiri"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Tahun Berdiri"
		            placeholder="Masukkan tahun berdiri"
		            defaultValue={dataIndustriUpdate.tahunBerdiri}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="websiteUrl"
		        name="websiteUrl"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Link Website Perusahaan"
		            placeholder="Masukkan link website perusahaan"
		            defaultValue={dataIndustriUpdate.websiteUrl}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="domain"
	        name="domain"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Domain Bidang Perusahaan"
	            options={listDomainPerusahaan}
	            placeholder="Masukkan domain bidang perusahaan"
					fieldState={fieldState}
					defaultValue={dataIndustriUpdate.domain}
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

export default ModifiedFormFormProfileUpdateIndustri
