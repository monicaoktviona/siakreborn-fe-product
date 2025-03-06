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

const MataTable = ({ mataKuliahDipilihDataList,
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mataKuliahDipilihDataList]}
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
            id: "namaMK",
            condition: "isHeading",
            label: "Nama MK",
  		  featureName: "mataKuliahName",
            editable:  false 
          }
  ,
          {
            id: "sKS",
            condition: "isHeading",
            label: "SKS",
  		  featureName: "mataKuliahSks",
            editable:  false 
          }
  ,
          {
            id: "namaKelas",
            condition: "isHeading",
            label: "Nama Kelas",
  		  featureName: "nama",
            editable:  false 
          }
  ,
          {
            id: "tanggalPengisian",
            condition: "isHeading",
            label: "Tanggal Pengisian",
  		  featureName: "tanggalPengisian",
            editable:  false 
          }
  ,
          {
            id: "penyelenggara",
            condition: "isHeading",
            label: "Penyelenggara",
  		  featureName: "mataKuliahKurikulumProgramStudiNama",
            editable:  false 
          }
  ]}
  	/>
  )
};

export default MataTable;
