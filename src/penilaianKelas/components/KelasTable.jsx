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

const KelasTable = ({ penilaianKelasDataList,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kelasItem) => {
    isMobile() && navigate(`/penilaian-kelas/${kelasItem.kelasId}`
    );
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
            id: "ruangan",
            condition: "isHeading",
            label: "Ruangan",
  		  featureName: "ruangan",
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
            id: "mataKuliah",
            condition: "isHeading",
            label: "Mata Kuliah",
  		  featureName: "mataKuliahName",
            editable:  false 
          }
  ,
          {
            id: "semester",
            condition: "isHeading",
            label: "Semester",
  		  featureName: "semesterKode",
            editable:  false 
          }
  ,
          {
            id: "search",
            condition: "isHeading",
            label: "Search",
  		  featureName: "",
            editable:  false 
          }
  ]}
        itemsEvents={(kelasItem) => [
          <Link to={`/penilaian-kelas/${kelasItem.kelasId}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(kelasItem) => [
        ]}
  	/>
  )
};

export default KelasTable;
