/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import deleteMataKuliah from '../services/deleteMataKuliah'

import * as Layouts from "@/commons/layouts";

const CPMKTable = ({ cPMKDataList,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (cPMKItem) => {
    isMobile() && navigate();
  };
  
  const [showModalKonfirmasiHapusMataKuliah, setShowModalKonfirmasiHapusMataKuliah] = React.useState(false);
  const hapus = async  (cPMK) => {
    await deleteMataKuliah({
        id: cPMK.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[cPMKDataList]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "kode",
            condition: "isHeading",
            label: "Kode",
  		  featureName: "kode",
            editable:  false 
          }
  ,
          {
            id: "deskripsi",
            condition: "isHeading",
            label: "Deskripsi",
  		  featureName: "deskripsi",
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
  ,
          {
            id: "cPL",
            condition: "isHeading",
            label: "CPL",
  		  featureName: "parentCPLKode",
            editable:  false 
          }
  ]}
        itemsEvents={(cPMKItem) => [
          <Link to=''>
            <Button
          	size="sm"
          	variant=
          				"secondary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(cPMKItem) => [
  	      <Modal
  	         isShow={showModalKonfirmasiHapusMataKuliah}
  	         title={"Konfirmasi Hapus Mata Kuliah"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusMataKuliah(false)}>Batal</Button></Link>
  	      <Button
  	        variant="danger"
  	        onClick={() => hapus(cPMKItem)}
  	      >
  	        Hapus
  	      </Button>
  	      </Modal>
  	      
        ]}
  	/>
  )
};

export default CPMKTable;
