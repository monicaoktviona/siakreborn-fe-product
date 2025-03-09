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

const SemuaTable = ({ tahunLulusSelectionField, alumniDataList,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (semuaItem) => {
    isMobile() && navigate(`/daftarsemuaalumni/detail/${semuaItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[tahunLulusSelectionField, alumniDataList]}
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
        itemsEvents={(semuaItem) => [
          <Link to={`/daftarsemuaalumni/detail/${semuaItem.id}`}>
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
