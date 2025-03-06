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
import savePenilaian from '../services/savePenilaian'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahNilai = ({ 
	komponenPenilaianDataList
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm({ defaultValues: komponenPenilaianDataList })
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    savePenilaian({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
     navigate(`/penilaian-kelas/${komponenPenilaianDataList.kelasIdkelasIdmahasiswaIdmahasiswaId}/nilai/:mahasiswaId`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambah Nilai" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="nilai"
		        name="nilai"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nilai"
		            placeholder="Masukkan nilai"
					type="number"
		            defaultValue={komponenPenilaianDataList.nilai}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="id"
	        name="id"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Komponen Penilaian"
	            options={komponenPenilaianDataList}
	            placeholder="Masukkan komponen penilaian"
					fieldState={fieldState}
					defaultValue={komponenPenilaianDataList.id}
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

export default FormTambahNilai
