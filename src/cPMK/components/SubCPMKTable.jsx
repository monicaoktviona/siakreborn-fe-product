/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import deleteCPMK from '../services/deleteCPMK'

import * as Layouts from "@/commons/layouts";

const SubCPMKTable = ({ dataSubCPMK,
	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusCPMK, setShowModalKonfirmasiHapusCPMK] = React.useState(false);
  const hapus = async  (subCPMK) => {
    await deleteCPMK({
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[dataSubCPMK]}
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
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
  		  featureName: "bobot",
            editable:  false 
          }
  ]}
  	/>
  )
};

export default SubCPMKTable;
