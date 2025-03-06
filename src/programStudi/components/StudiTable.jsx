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

const StudiTable = ({ programStudiDataList,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (studiItem) => {
    isMobile() && navigate(`/programstudi/${studiItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[programStudiDataList]}
  	  detail={detail}
  	  isSearchable
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
            id: "jenjang",
            condition: "isHeading",
            label: "Jenjang",
  		  featureName: "jenjang",
            editable:  false 
          }
  ,
          {
            id: "nomorSK",
            condition: "isHeading",
            label: "Nomor SK",
  		  featureName: "noSK",
            editable:  false 
          }
  ,
          {
            id: "kaprodi",
            condition: "isHeading",
            label: "Kaprodi",
  		  featureName: "kaprodi",
            editable:  false 
          }
  ]}
        itemsEvents={(studiItem) => [
          <Link to={`/programstudi/${studiItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(studiItem) => [
        ]}
  	/>
  )
};

export default StudiTable;
