/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams, useSearchParams } from "react-router";
import toast from "react-hot-toast";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  VisualizationAttr,
  Spinner,
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";

import savePenilaian from "../services/savePenilaian";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahNilai = ({ komponenPenilaianDataList }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: komponenPenilaianDataList,
  });

  const navigate = useNavigate();
  const { id, mahasiswaId } = useParams();

  const simpan = (data) => {
    const cleanData = cleanFormData(data);
    savePenilaian({
      mahasiswaId,
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/penilaian-kelas/${id}/nilai/${mahasiswaId}`);
      })
      .catch((error) => {
        console.error(error);
        notifyError(error);
      });
  };

  return (
    <Layouts.FormComponentLayout
      title="Tambah Nilai"
      onSubmit={handleSubmit(simpan)}
      vas={[]}
      formFields={[
        <Controller
          name="komponenPenilaianId"
          control={control}
          render={({ field, fieldState }) => (
            <SelectionField
              label="Komponen Penilaian"
              options={komponenPenilaianDataList}
              placeholder="Masukkan komponen penilaian"
              fieldState={fieldState}
              //   defaultValue={komponenPenilaianDataList.id}
              {...field}
              isRequired={false}
            />
          )}
        />,
        <Controller
          name="nilai"
          control={control}
          render={({ field, fieldState }) => (
            <InputField
              label="Nilai"
              placeholder="Masukkan nilai"
              type="number"
              fieldState={fieldState}
              {...field}
              isRequired={false}
            />
          )}
        />,
      ]}
      itemsEvents={[
        <Button type="submit" variant="primary">
          Simpan
        </Button>,
      ]}
    />
  );
};

export default FormTambahNilai;
