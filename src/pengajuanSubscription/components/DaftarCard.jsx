/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react'
import { Link, useParams } from "react-router";

import { useAuth } from '@/commons/auth'
import { Button } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const DaftarCard = ({ paketSubscriptionBinding,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[paketSubscriptionBinding]}
      itemsAttrs={[
        {
          id: "namaPaket",
          condition: "",
          label: "Nama Paket",
          featureName: "name",
        }
  ,
        {
          id: "deskripsi",
          condition: "",
          label: "Deskripsi",
          featureName: "deskripsi",
        }
  ,
        {
          id: "harga",
          condition: "",
          label: "Harga",
          featureName: "harga",
        }
      ]}
      itemsEvents={(daftarItem) => [
  	]}
    />
  )	
};

export default DaftarCard;
