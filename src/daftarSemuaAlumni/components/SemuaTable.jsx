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
    isMobile() && navigate(`/daftarsemuaalumni/detail/:id`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[tahunLulusSelectionField, alumniDataList]}
  	  detail={detail}
  	  itemsAttrs={[
  ,
  ]}
        itemsEvents={(semuaItem) => [
          <Link to={`/daftarsemuaalumni/detail/:id`}>
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
