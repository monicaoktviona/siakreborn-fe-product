/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DetailPenilaianMahasiswa = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "mataKuliah",
          condition: "",
          label: "Mata Kuliah",
          featureName: "mataKuliahNama",
        }
        ,
        {
          id: "kodeMataKuliah",
          condition: "",
          label: "Kode Mata Kuliah",
          featureName: "mataKuliahKode",
        }
        ,
        {
          id: "nilaiAkhir",
          condition: "",
          label: "Nilai Akhir",
          featureName: "nilaiAkhir",
        }
        ,
        {
          id: "nilaiHuruf",
          condition: "",
          label: "Nilai Huruf",
          featureName: "nilaiAkhirHuruf",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailPenilaianMahasiswa;
