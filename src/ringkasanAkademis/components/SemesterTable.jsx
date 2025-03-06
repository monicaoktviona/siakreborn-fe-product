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

const SemesterTable = ({ ringkasanSemesterDataList,
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[ringkasanSemesterDataList]}
  	  isSearchable
  	  itemsAttrs={[
          {
            id: "term",
            condition: "isHeading",
            label: "Term",
  		  featureName: "semesterKode",
            editable:  false 
          }
  ,
          {
            id: "periode",
            condition: "isHeading",
            label: "Periode",
  		  featureName: "semesterTanggal",
            editable:  false 
          }
  ,
          {
            id: "statusIRS",
            condition: "isHeading",
            label: "Status IRS",
  		  featureName: "status",
            editable:  false 
          }
  ,
          {
            id: "totalSKS",
            condition: "isHeading",
            label: "Total SKS",
  		  featureName: "totalSKS",
            editable:  false 
          }
  ]}
  	/>
  )
};

export default SemesterTable;
