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

const KuliahTable = ({ mataKuliahDataList, kurikulumSelectionField,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kuliahItem) => {
    isMobile() && navigate(`/matakuliah/${kuliahItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mataKuliahDataList, kurikulumSelectionField]}
  	  detail={detail}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Kurikulum",
  	      featureName: "kurikulumName",
  	      options: kurikulumSelectionField,
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
          }
  ,
          {
            id: "nama",
            condition: "isHeading",
            label: "Nama",
  		  featureName: "nama",
            editable:  false 
          }
  ,
          {
            id: "sKS",
            condition: "isHeading",
            label: "SKS",
  		  featureName: "sks",
            editable:  false 
          }
  ,
          {
            id: "term",
            condition: "isHeading",
            label: "Term",
  		  featureName: "term",
            editable:  false 
          }
  ,
          {
            id: "kurikulum",
            condition: "isHeading",
            label: "Kurikulum",
  		  featureName: "kurikulumName",
            editable:  false 
          }
  ,
          {
            id: "filterKurikulum",
            condition: "isHeading",
            label: "Filter Kurikulum",
  		  featureName: "kurikulumSelectionField",
            editable:  false 
          }
  ]}
        itemsEvents={(kuliahItem) => [
          <Link to={`/matakuliah/${kuliahItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(kuliahItem) => [
        ]}
  	/>
  )
};

export default KuliahTable;
