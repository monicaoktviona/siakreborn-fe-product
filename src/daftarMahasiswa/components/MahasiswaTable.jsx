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

const MahasiswaTable = ({ mahasiswaDataList, angkatanSelectionField,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (mahasiswaItem) => {
    isMobile() && navigate(`/daftarmahasiswa/detail/:id`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mahasiswaDataList, angkatanSelectionField]}
  	  detail={detail}
  	  filterFields={[
  	    {
  	      label: "Angkatan",
  	      featureName: "tahunAngkatan",
  	      options: angkatanSelectionField,
            editable: false,
  	    }
  	  ]}
  	  itemsAttrs={[
          {
            id: "tahunLulus",
            condition: "isHeading",
            label: "Tahun Lulus",
  		  featureName: "invalid",
            editable:  false 
          }
  ,
          {
            id: "tahunAngkatan",
            condition: "isHeading",
            label: "Tahun Angkatan",
  		  featureName: "tahunAngkatan",
            editable:  false 
          }
  ,
          {
            id: "statusAkademik",
            condition: "isHeading",
            label: "Status Akademik",
  		  featureName: "statusAkademik",
            editable:  false 
          }
  ,
          {
            id: "filterAngkatan",
            condition: "isHeading",
            label: "Filter Angkatan",
  		  featureName: "angkatanSelectionField",
            editable:  false 
          }
  ,
          {
            id: "filterTahunLulus",
            condition: "isHeading",
            label: "Filter Tahun Lulus",
  		  featureName: "",
            editable:  false 
          }
  ]}
        itemsEvents={(mahasiswaItem) => [
          <Link to={`/daftarmahasiswa/detail/:id`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(mahasiswaItem) => [
        ]}
  	/>
  )
};

export default MahasiswaTable;
