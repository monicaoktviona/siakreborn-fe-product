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

import deleteKurikulum from '../services/deleteKurikulum'

import * as Layouts from "@/commons/layouts";

const CPLTable = ({ cPLDataList,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (cPLItem) => {
    isMobile() && navigate(`/cpl/${cPLItem.id}`);
  };
  
  const [showModalKonfirmasiHapusKurikulum, setShowModalKonfirmasiHapusKurikulum] = React.useState(false);
  const hapus = async  (cPL) => {
    await deleteKurikulum({
        id: cPL.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[cPLDataList]}
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
  ]}
        itemsEvents={(cPLItem) => [
          <Link to={`/cpl/${cPLItem.id}`}>
            <Button
          	size="sm"
          	variant=
          				"secondary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(cPLItem) => [
  	      <Modal
  	         isShow={showModalKonfirmasiHapusKurikulum}
  	         title={"Konfirmasi Hapus Kurikulum"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusKurikulum(false)}>Batal</Button></Link>
  	      <Button
  	        variant="danger"
  	        onClick={() => hapus(cPLItem)}
  	      >
  	        Hapus
  	      </Button>
  	      </Modal>
  	      
        ]}
  	/>
  )
};

export default CPLTable;
