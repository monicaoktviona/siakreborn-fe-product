/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import * as Layouts from "@/commons/layouts";

const KelasTable = ({ kelasRencanaStudiDataList,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kelasItem) => {
    isMobile() && navigate();
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[kelasRencanaStudiDataList]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "namaKelas",
            condition: "isHeading",
            label: "Nama Kelas",
  		  featureName: "nama",
            editable:  false 
          }
  ,
          {
            id: "kapasitas",
            condition: "isHeading",
            label: "Kapasitas",
  		  featureName: "kapasitas",
            editable:  false 
          }
  ,
          {
            id: "jadwal",
            condition: "isHeading",
            label: "Jadwal",
  		  featureName: "jadwal",
            editable:  false 
          }
  ,
          {
            id: "ruangan",
            condition: "isHeading",
            label: "Ruangan",
  		  featureName: "ruangan",
            editable:  false 
          }
  ,
          {
            id: "pengajar",
            condition: "isHeading",
            label: "Pengajar",
  		  featureName: "dosen",
            editable:  false 
          }
  ,
          {
            id: "periode",
            condition: "isHeading",
            label: "Periode",
  		  featureName: "semesterTanggal",
            editable:  false 
          }
  ]}
        itemsEvents={(kelasItem) => [
          
          
        ]}
    	  itemsModals={(kelasItem) => [
        ]}
  	/>
  )
};

export default KelasTable;
