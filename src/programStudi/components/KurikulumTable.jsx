/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import deleteProgramStudi from '../services/deleteProgramStudi'

import * as Layouts from "@/commons/layouts";

const KurikulumTable = ({ kurikulumDataList,
	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusProgramStudi, setShowModalKonfirmasiHapusProgramStudi] = React.useState(false);
  const hapus = async  (kurikulum) => {
    await deleteProgramStudi({
        id: kurikulum.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[kurikulumDataList]}
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
            id: "nomorSK",
            condition: "isHeading",
            label: "Nomor SK",
  		  featureName: "noSK",
            editable:  false 
          }
  ,
          {
            id: "status",
            condition: "isHeading",
            label: "Status ",
  		  featureName: "status",
            editable:  false 
          }
  ,
          {
            id: "programStudi",
            condition: "isHeading",
            label: "Program Studi",
  		  featureName: "programStudiName",
            editable:  false 
          }
  ,
          {
            id: "profilLulusan",
            condition: "isHeading",
            label: "Profil Lulusan",
  		  featureName: "profilLulusan",
            editable:  false 
          }
  ]}
  	/>
  )
};

export default KurikulumTable;
