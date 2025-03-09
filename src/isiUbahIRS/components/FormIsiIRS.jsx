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
import saveRencanaStudiMe from '../services/saveRencanaStudiMe'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormIsiIRS = ({ 
  formTitle,
  kelasRencanaStudiDataList,
  selectedClasses,
  handleChange,
  isLoading,
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const simpan = (data) => {
    const cleanData = cleanFormData(data)
    const req = {
      kelasIds: selectedClasses.map((item) => item.id),
    };
    saveRencanaStudi(req)
      .then(({ data: { data } }) => {
        navigate('/irs/ringkasan')
      })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Isi IRS" 
		  onSubmit={handleSubmit(simpan)}
	
	    vas={[
		  ]}
	
		  formFields={kelasRencanaStudiDataList?.map((mk, idx) => {
        return (
          <div key={idx} className="flex flex-col gap-4">
            <Layouts.ListContainerTableLayout
              title={mk.title}
              singularName={"Kelas"}
              items={[mk.kelas]}
              isLoading={isLoading}
            >
              <KelasTable
                handleChange={handleChange}
                kelasRencanaStudiDataList={mk.kelas}
                selectedClasses={selectedClasses}
              />
            </Layouts.ListContainerTableLayout>
          </div>
        );
      })}
	
		  itemsEvents={[
				<Button key="Simpan" type="submit" variant="primary">Simpan</Button>
	    ]}
	  />
  )
}

export default FormIsiIRS
