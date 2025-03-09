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

const SemuaTable = ({ mahasiswaDataList, angkatanSelectionField,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (semuaItem) => {
    isMobile() && navigate(`/daftarsemuamahasiswa/detail/${semuaItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mahasiswaDataList, angkatanSelectionField]}
  	  detail={detail}
  	  isSearchable
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
            id: "nama",
            condition: "isHeading",
            label: "Nama",
            featureName: "nama",
            editable:  false 
          },
          {
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
            featureName: "npm",
            editable:  false 
          },
          {
            id: "tahunLulus",
            condition: "isHeading",
            label: "Tahun Lulus",
  		      featureName: "invalid",
            editable:  false 
          },
          {
            id: "tahunAngkatan",
            condition: "isHeading",
            label: "Tahun Angkatan",
  		      featureName: "tahunAngkatan",
            editable:  false 
          },
          {
            id: "statusAkademik",
            condition: "isHeading",
            label: "Status Akademik",
  		      featureName: "statusAkademik",
            editable:  false 
          },
          {
            id: "filterTahunLulus",
            condition: "isHeading",
            label: "Filter Tahun Lulus",
  		      featureName: "",
            editable:  false 
          },
          {
            id: "filterAngkatan",
            condition: "isHeading",
            label: "Filter Angkatan",
  		      featureName: "angkatanSelectionField",
            editable:  false 
          }
  ]}
        itemsEvents={(semuaItem) => [
          <Link to={`/daftarsemuamahasiswa/detail/${semuaItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(semuaItem) => [
        ]}
  	/>
  )
};

export default SemuaTable;
