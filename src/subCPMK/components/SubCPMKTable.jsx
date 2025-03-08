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

const SubCPMKTable = ({ subCPMKDataList,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (subCPMKItem) => {
    isMobile() && navigate(`/subcpmk/${subCPMKItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[subCPMKDataList]}
  	  detail={detail}
  	  isSearchable
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
            id: "cPMK",
            condition: "isHeading",
            label: "CPMK",
            featureName: "parentCPMKKode",
            editable:  false 
          },
          {
            id: "mataKuliah",
            condition: "isHeading",
            label: "Mata Kuliah",
            featureName: "parentCPMKMataKuliahNama",
            editable:  false 
          },
          {
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
            featureName: "bobot",
            editable:  false 
          },  
  ]}
        itemsEvents={(subCPMKItem) => [
          <Link to={`/subcpmk/${subCPMKItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(subCPMKItem) => [
        ]}
  	/>
  )
};

export default SubCPMKTable;
