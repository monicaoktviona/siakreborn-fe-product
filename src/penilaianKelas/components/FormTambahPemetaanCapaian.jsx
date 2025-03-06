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
import saveBobotKomponenPenilaian from '../services/saveBobotKomponenPenilaian'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahPemetaanCapaian = ({ 
	komponenPenilaian
, 	capaian
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: komponenPenilaian })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    saveBobotKomponenPenilaian({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/penilaian-kelas/${komponenPenilaian.kelasId}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambah Pemetaan Capaian" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="bobot"
		        name="bobot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Bobot"
		            placeholder="Masukkan bobot"
					type="number"
		            defaultValue={komponenPenilaian.bobot}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="komponenPenilaianId"
	        name="komponenPenilaianId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Komponen Penilaian"
	            options={komponenPenilaian}
	            placeholder="Masukkan komponen penilaian"
					fieldState={fieldState}
					defaultValue={komponenPenilaian.komponenPenilaianId}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
	,
		  
		  <Controller
		    key="capaianId"
	        name="capaianId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Capaian"
	            options={capaian}
	            placeholder="Masukkan capaian"
					fieldState={fieldState}
					defaultValue={komponenPenilaian.capaianId}
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

export default FormTambahPemetaanCapaian
