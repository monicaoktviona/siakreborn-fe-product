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


const DetailsAlumni = ({ data }) => {
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
          id: "pekerjaan",
          condition: "",
          label: "Pekerjaan",
          featureName: "pekerjaan",
        }
        ,
        {
          id: "tempatKerja",
          condition: "",
          label: "Tempat Kerja",
          featureName: "tempatKerja",
        }
        ,
        {
          id: "tahunLulus",
          condition: "",
          label: "Tahun Lulus",
          featureName: "tahunLulus",
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
          id: "linkPortofolio",
          condition: "",
          label: "Link Portofolio",
          featureName: "portofolioUrl",
        }
        ,
        {
          id: "linkLinkedIn",
          condition: "",
          label: "Link LinkedIn",
          featureName: "linkedinUrl",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailsAlumni;
