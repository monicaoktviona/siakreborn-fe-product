/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const NilaiTable = ({ laporanNilaiCPLDataList,
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[laporanNilaiCPLDataList]}
  	  isSearchable
  	  itemsAttrs={[
          {
            id: "kodeCPL",
            condition: "isHeading",
            label: "Kode CPL",
  		  featureName: "kode",
            editable:  false 
          }
  ,
          {
            id: "nilai",
            condition: "isHeading",
            label: "Nilai",
  		  featureName: "nilai",
            editable:  false 
          }
  ]}
  	/>
  )
};

export default NilaiTable;
