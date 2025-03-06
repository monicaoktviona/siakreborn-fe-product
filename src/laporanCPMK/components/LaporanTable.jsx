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

const LaporanTable = ({ kelasSelectionField, laporanCPMKDataList,
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[kelasSelectionField, laporanCPMKDataList]}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Kelas",
  	      featureName: "kelasSelectionField",
  	      options: kelasSelectionField,
            editable: false,
  	    }
  	  ]}
  	  itemsAttrs={[
          {
            id: "filterKelas",
            condition: "isHeading",
            label: "Filter Kelas",
  		  featureName: "kelasSelectionField",
            editable:  false 
          }
  ,
          {
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
  		  featureName: "npm",
            editable:  false 
          }
  ,
          {
            id: "nama",
            condition: "isHeading",
            label: "Nama",
  		  featureName: "nama",
            editable:  false 
          }
  ,
          {
            id: "kelas",
            condition: "isHeading",
            label: "Kelas",
  		  featureName: "kelasNama",
            editable:  false 
          }
  ]}
  	/>
  )
};

export default LaporanTable;
