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

const CPLTable = ({ cPLDataList, kurikulumSelectionField,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (cPLItem) => {
    isMobile() && navigate(`/cpl/${cPLItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[cPLDataList, kurikulumSelectionField]}
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
            id: "deskripsi",
            condition: "isHeading",
            label: "Deskripsi",
            featureName: "deskripsi",
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
  ]}
        itemsEvents={(cPLItem) => [
          <Link to={`/cpl/${cPLItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(cPLItem) => [
        ]}
  	/>
  )
};

export default CPLTable;
