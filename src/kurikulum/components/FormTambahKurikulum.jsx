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
  FileInputField,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveKurikulum from '../services/saveKurikulum'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahKurikulum = ({ 
	programStudiSelectionField
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveKurikulum({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/kurikulum`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	<Layouts.FormComponentLayout
		title="Tambah Kurikulum" 
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
			  key="noSK"
			  name="noSK"
			  control={control}
			  render={({ field, fieldState }) => (
				<InputField
				  label="Nomor SK"
				  placeholder="Masukkan nomor sk"
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
			  key="profilLulusan"
			  name="profilLulusan"
			  control={control}
			  render={({ field, fieldState }) => (
				<InputField
				  label="Profil Lulusan"
				  placeholder="Masukkan profil lulusan"
				  fieldState={fieldState}
				  {...field}
				  isRequired={false}
				/>
			  )}
			/>
  ,
			  
			  <Controller
				  key="sKUrl"
				  name="sKUrl"
				  control={control}
				  render={({ field, fieldState }) => (
				  <FileInputField
					label="Dokumen SK"
					placeholder="Masukkan dokumen sk"
						fieldState={fieldState}
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

export default FormTambahKurikulum
