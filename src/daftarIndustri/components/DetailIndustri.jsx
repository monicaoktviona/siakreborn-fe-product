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


const DetailIndustri = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "alamat",
          condition: "",
          label: "Alamat",
          featureName: "alamat",
        }
        ,
        {
          id: "tahunBerdiri",
          condition: "",
          label: "Tahun Berdiri",
          featureName: "tahunBerdiri",
        }
        ,
        {
          id: "sizeCompany(JumlahKaryawan)",
          condition: "",
          label: "Size Company (Jumlah Karyawan)",
          featureName: "jumlahKaryawan",
        }
        ,
        {
          id: "linkWebsitePerusahaan",
          condition: "",
          label: "Link Website Perusahaan",
          featureName: "websiteUrl",
        }
        ,
        {
          id: "domainBidangPerusahaan",
          condition: "",
          label: "Domain Bidang Perusahaan",
          featureName: "domain",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailIndustri;
