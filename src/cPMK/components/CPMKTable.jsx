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
    isMobile() && navigate(`/cpmk/:id`
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
  	      featureName: "cplName",
  	      options: cPLSelectionField,
            editable: false,
  	    }
  , 	    {
  	      label: "Mata Kuliah",
  	      featureName: "mataKuliahName",
  	      options: mataKuliahSelectionField,
            editable: false,
  	    }
  	  ]}
  	  itemsAttrs={[
          {
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
  		  featureName: "bobot",
            editable:  false 
          }
  ,
          {
            id: "cPL",
            condition: "isHeading",
            label: "CPL",
  		  featureName: "cplName",
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
            id: "filterCPL",
            condition: "isHeading",
            label: "Filter CPL",
  		  featureName: "cPLSelectionField",
            editable:  false 
          }
  ,
          {
            id: "filterMataKuliah",
            condition: "isHeading",
            label: "Filter Mata Kuliah",
  		  featureName: "mataKuliahSelectionField",
            editable:  false 
          }
  ]}
        itemsEvents={(cPMKItem) => [
          <Link to={`/cpmk/:id`}>
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
