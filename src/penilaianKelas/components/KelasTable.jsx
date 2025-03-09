/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";
import isSelectedFeature from "@/commons/utils/isSelectedFeature";
import { isMobile } from "@/commons/utils/responsive";

import * as Layouts from "@/commons/layouts";

const KelasTable = ({ penilaianKelasDataList }) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kelasItem) => {
    isMobile() && navigate(`/penilaian-kelas/${kelasItem.id}`);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[penilaianKelasDataList]}
      detail={detail}
      isSearchable
      itemsAttrs={[
        {
          id: "nama",
          condition: "isHeading",
          label: "Nama",
          featureName: "nama",
        },
        {
          id: "kapasitas",
          condition: "isHeading",
          label: "Kapasitas",
          featureName: "kapasitas",
        },
        {
          id: "ruangan",
          condition: "isHeading",
          label: "Ruangan",
          featureName: "ruangan",
        },
        {
          id: "jadwal",
          condition: "isHeading",
          label: "Jadwal",
          featureName: "jadwal",
        },
        {
          id: "mataKuliah",
          condition: "isHeading",
          label: "Mata Kuliah",
          featureName: "mataKuliahName",
        },
        {
          id: "semester",
          condition: "isHeading",
          label: "Semester",
          featureName: "semesterKode",
        },
      ]}
      itemsEvents={(kelasItem) => [
        <Link to={`/penilaian-kelas/${kelasItem.id}`}>
          <Button variant="primary">Detail</Button>
        </Link>,
      ]}
      itemsModals={(kelasItem) => []}
    />
  );
};

export default KelasTable;

