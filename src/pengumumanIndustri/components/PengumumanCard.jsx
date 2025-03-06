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

const PengumumanCard = ({ listPengumumanIndustriDataBinding,
	}) => {
  const { checkPermission } = useAuth();
  
  return (
    <Layouts.ListComponentCardLayout
      items={[listPengumumanIndustriDataBinding]}
      itemsAttrs={[
        {
          id: "judul",
          condition: "",
          label: "Judul",
          featureName: "judul",
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
          id: "tanggalPublikasi",
          condition: "",
          label: "Tanggal Publikasi",
          featureName: "tanggalPublikasi",
        }
  ,
        {
          id: "pengunggah",
          condition: "",
          label: "Pengunggah",
          featureName: "industriNama",
        }
      ]}
      itemsEvents={(pengumumanItem) => [
  	]}
    />
  )	
};

export default PengumumanCard;
