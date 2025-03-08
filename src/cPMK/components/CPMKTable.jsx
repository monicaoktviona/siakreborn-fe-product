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

const CPMKTable = ({ cPMKDataList, cPLSelectionField, mataKuliahSelectionField,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (cPMKItem) => {
    isMobile() && navigate(`/cpmk/${cPMKItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[cPMKDataList, cPLSelectionField, mataKuliahSelectionField]}
  	  detail={detail}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "CPL",
  	      featureName: "parentCPLKode",
  	      options: cPLSelectionField,
            editable: false,
  	    }
  , 	    {
  	      label: "Mata Kuliah",
  	      featureName: "mataKuliahNama",
  	      options: mataKuliahSelectionField,
            editable: false,
  	    }
  	  ]}
  	  itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
          editable:  false
        },
        {
          id: "deskripsi",
          condition: "isHeading",
          label: "Deskripsi",
          featureName: "deskripsi",
          editable:  false
        },
        {
          id: "bobot",
          condition: "isHeading",
          label: "Bobot",
          featureName: "bobot",
          editable:  false 
        },
        {
          id: "cPL",
          condition: "isHeading",
          label: "CPL",
          featureName: "parentCPLKode",
          editable:  false 
        },
        {
          id: "mataKuliah",
          condition: "isHeading",
          label: "Mata Kuliah",
          featureName: "mataKuliahNama",
          editable:  false 
        },
  ]}
        itemsEvents={(cPMKItem) => [
          <Link to={`/cpmk/${cPMKItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(cPMKItem) => [
        ]}
  	/>
  )
};

export default CPMKTable;
