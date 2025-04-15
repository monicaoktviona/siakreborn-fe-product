/*
	Generated on 15/04/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const PrasyaratTable = ({ dataBindingPengecekanPrasyaratMataKuliahDataList,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[dataBindingPengecekanPrasyaratMataKuliahDataList]}
  	  itemsAttrs={[
          {
            id: "kodeMataKuliah",
            condition: "",
            label: "Kode Mata Kuliah",
  		  featureName: "parentMataKuliahKode",
            editable:  false 
          }
  ,
          {
            id: "namaMataKuliah",
            condition: "",
            label: "Nama Mata Kuliah",
  		  featureName: "parentMataKuliahNama",
            editable:  false 
          }
  ,
          {
            id: "mataKuliahPrasyarat",
            condition: "",
            label: "Mata Kuliah Prasyarat",
  		  featureName: "mataKuliahNama",
            editable:  false 
          }
  ,
          {
            id: "syarat",
            condition: "",
            label: "Syarat",
  		  featureName: "syarat",
            editable:  false 
          }
  ,
          {
            id: "status",
            condition: "",
            label: "Status",
  		  featureName: "status",
            editable:  false 
          }
  ]}
  	/>
  </>
  )
};

export default PrasyaratTable;
