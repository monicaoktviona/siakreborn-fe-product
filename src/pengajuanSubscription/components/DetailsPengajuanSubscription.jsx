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


const DetailsPengajuanSubscription = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
  
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "namaPaket",
          condition: "",
          label: "Nama Paket",
          featureName: "subscriptionplanName",
        }
        ,
        {
          id: "deskripsiPaket",
          condition: "",
          label: "Deskripsi Paket",
          featureName: "subscriptionplanDeskripsi",
        }
        ,
        {
          id: "hargaPaket",
          condition: "",
          label: "Harga Paket",
          featureName: "subscriptionplanHarga",
        }
        ,
        {
          id: "statusPengajuan",
          condition: "",
          label: "Status Pengajuan",
          featureName: "status",
        }
        
      ]}
      itemsEvents={[
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailsPengajuanSubscription;
