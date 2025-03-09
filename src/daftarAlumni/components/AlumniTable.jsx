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

const AlumniTable = ({ alumniDataList, tahunLulusSelectionField,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (alumniItem) => {
    isMobile() && navigate(`/daftaralumni/detail/${alumniItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[alumniDataList, tahunLulusSelectionField]}
  	  detail={detail}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Tahun Lulus",
  	      featureName: "tahunLulus",
  	      options: tahunLulusSelectionField,
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
          }
  ,
          {
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
  		  featureName: "npm",
            editable:  false 
          }
  ,
          {
            id: "tahunLulus",
            condition: "isHeading",
            label: "Tahun Lulus",
  		  featureName: "tahunLulus",
            editable:  false 
          }
  ]}
        itemsEvents={(alumniItem) => [
          <Link to={`/daftaralumni/detail/${alumniItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(alumniItem) => [
        ]}
  	/>
  )
};

export default AlumniTable;
