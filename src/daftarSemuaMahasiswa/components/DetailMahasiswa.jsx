/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';


import * as Layouts from "@/commons/layouts";


const DetailMahasiswa = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "nama",
          condition: "",
          label: "Nama",
          featureName: "nama",
        }
        ,
        {
          id: "nPM",
          condition: "",
          label: "NPM",
          featureName: "npm",
        }
        ,
        {
          id: "email",
          condition: "",
          label: "Email",
          featureName: "email",
        }
        ,
        {
          id: "statusAkademik",
          condition: "",
          label: "Status Akademik",
          featureName: "statusAkademik",
        }
        ,
        {
          id: "tahunAngkatan",
          condition: "",
          label: "Tahun Angkatan",
          featureName: "tahunAngkatan",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailMahasiswa;
