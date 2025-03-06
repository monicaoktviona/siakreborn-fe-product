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

const MahasiswaTable = ({ mahasiswaDataList,

	}) => {
  const { checkPermission } = useAuth();
  	const { id,  } = useParams();
  const navigate = useNavigate();
  const detail = async (mahasiswaItem) => {
    isMobile() && navigate(`/penilaian-kelas/${mahasiswaItem.mahasiswaId}/nilai/:mahasiswaId`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mahasiswaDataList]}
  	  detail={detail}
  	  isSearchable
  	  itemsAttrs={[
          {
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
  		  featureName: "npm",
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
  ]}
        itemsEvents={(mahasiswaItem) => [
          <Link to={`/penilaian-kelas/${mahasiswaItem.mahasiswaId}/nilai/:mahasiswaId`}>
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
