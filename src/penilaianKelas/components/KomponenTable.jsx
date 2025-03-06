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

const KomponenTable = ({ komponenPenilaianDataList,

	}) => {
  const { checkPermission } = useAuth();
  	const { 	kelasId } = useParams();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[komponenPenilaianDataList]}
  	  itemsAttrs={[
          {
            id: "komponen",
            condition: "isHeading",
            label: "Komponen",
  		  featureName: "nama",
            editable:  false 
          }
  ,
          {
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
  		  featureName: "bobot",
            editable:  false 
          }
  ]}
        itemsEvents={(komponenItem) => [
          checkPermission("UpdateKomponenPenilaian") &&  (
            <Link to={`/penilaian-kelas/${komponenItem.id}/komponen/:komponenId/ubah`}>
              <Button
            	size="sm"
            	variant=
            		"primary"
              >
                Ubah Komponen
              </Button>
            </Link>
            
          )
          
        ]}
    	  itemsModals={(komponenItem) => [
        ]}
  	/>
  )
};

export default KomponenTable;
