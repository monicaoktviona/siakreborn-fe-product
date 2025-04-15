/*
	Generated on 15/04/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';


import deleteMataKuliah from '../services/deleteMataKuliah'

import * as Layouts from "@/commons/layouts";

const PrasyaratTable = ({ prasyaratMataKuliahDataList,
		 

	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  	const { id,  } = useParams();
  const navigate = useNavigate();
  const detail = async (prasyaratItem) => {
    isMobile() && navigate(`/matakuliah/${id}/prasyarat/${prasyaratItem.id}`
    );
  };
  
  const [showModalKonfirmasiHapusMataKuliah, setShowModalKonfirmasiHapusMataKuliah] = React.useState(false);
  
  
  	
    const hapus = async (selectedKonfirmasiHapusMataKuliah) => {
      await deleteMataKuliah({
        Id: selectedKonfirmasiHapusMataKuliah.Id,
      });
  		window.location.reload()
    }
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[prasyaratMataKuliahDataList]}
  	  detail={detail}
  	  itemsAttrs={[
          {
            id: "kodeMataKuliah",
            condition: "",
            label: "Kode Mata Kuliah",
  		  featureName: "mataKuliahKode",
            editable:  false 
          }
  ,
          {
            id: "kurikulum",
            condition: "",
            label: "Kurikulum",
  		  featureName: "mataKuliahKurikulumName",
            editable:  false 
          }
  ,
          {
            id: "namaMataKuliah",
            condition: "",
            label: "Nama Mata Kuliah",
  		  featureName: "mataKuliahNama",
            editable:  false 
          }
  ,
          {
            id: "bobot",
            condition: "",
            label: "Bobot",
  		  featureName: "mataKuliahSks",
            editable:  false 
          }
  ,
          {
            id: "syarat",
            condition: "",
            label: "Syarat",
  		  featureName: "syarat",
            editable:  false 
          }
  ]}
        itemsEvents={(prasyaratItem) => [
          <Link to={`/matakuliah/${id}/prasyarat/${prasyaratItem.id}`}>
            <Button
              size="sm"
              variant=
                  "primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
        itemsModals={(prasyaratItem) => [
          <Modal
              isShow={showModalKonfirmasiHapusMataKuliah}
              title={"Konfirmasi Hapus Mata Kuliah"}
          >
            <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusMataKuliah(false)}>Batal</Button></Link>
          <Button
            variant="danger"
            onClick={() => hapus(prasyaratItem)}
          >
            Hapus
          </Button>
          </Modal>
          
        ]}
  	/>		
  </>
  )
};

export default PrasyaratTable;
