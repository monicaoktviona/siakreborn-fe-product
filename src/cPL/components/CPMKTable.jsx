/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import deleteCPL from '../services/deleteCPL'

import * as Layouts from "@/commons/layouts";

const CPMKTable = ({ bobot,
	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusCPL, setShowModalKonfirmasiHapusCPL] = React.useState(false);
  const hapus = async  (cPMK) => {
    await deleteCPL({
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[bobot]}
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

export default CPMKTable;
