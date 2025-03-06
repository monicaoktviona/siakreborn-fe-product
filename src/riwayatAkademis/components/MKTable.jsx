/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const MKTable = ({ mKRiwayatAkademisDataList,
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mKRiwayatAkademisDataList]}
  	  isSearchable
  	  itemsAttrs={[
          {
            id: "kodeMK",
            condition: "isHeading",
            label: "Kode MK",
  		  featureName: "mataKuliahKode",
            editable:  false 
          }
  ,
          {
            id: "kurikulum",
            condition: "isHeading",
            label: "Kurikulum",
  		  featureName: "mataKuliahKurikulumName",
            editable:  false 
          }
  ,
          {
            id: "namaMK",
            condition: "isHeading",
            label: "Nama MK",
  		  featureName: "mataKuliahName",
            editable:  false 
          }
  ,
          {
            id: "kelas",
            condition: "isHeading",
            label: "Kelas",
  		  featureName: "nama",
            editable:  false 
          }
  ,
          {
            id: "term",
            condition: "isHeading",
            label: "Term",
  		  featureName: "semesterKode",
            editable:  false 
          }
  ,
          {
            id: "nilaiAkhir",
            condition: "isHeading",
            label: "Nilai Akhir",
  		  featureName: "nilaiAkhir",
            editable:  false 
          }
  ,
          {
            id: "nilaiHuruf",
            condition: "isHeading",
            label: "Nilai Huruf",
  		  featureName: "nilaiHuruf",
            editable:  false 
          }
  ]}
  	/>
  )
};

export default MKTable;
