/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteSubCPMK from '../services/deleteSubCPMK';

import * as Layouts from "@/commons/layouts";


const DetailSubCPMK = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusSubCPMK, setShowModalKonfirmasiHapusSubCPMK] = React.useState(false); 
    const ubahSubCPMK = async () => {
      navigate(
        '/subcpmk/ubah?'
        + `id=${data.id}`
        
      );
    };
    
    
  
    const hapus = async () => {
      await deleteSubCPMK({
        id: data.id
      });
      navigate('/subcpmk');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
          editable:  false 
        },
        {
          id: "deskripsi",
          condition: "isHeading",
          label: "Deskripsi",
          featureName: "deskripsi",
          editable:  false 
        },
        {
          id: "cPMK",
          condition: "isHeading",
          label: "CPMK",
          featureName: "parentCPMKKode",
          editable:  false 
        },
        {
          id: "mataKuliah",
          condition: "isHeading",
          label: "Mata Kuliah",
          featureName: "parentCPMKMataKuliahNama",
          editable:  false 
        },
        {
          id: "bobot",
          condition: "isHeading",
          label: "Bobot",
          featureName: "bobot",
          editable:  false 
        },          
      ]}
      itemsEvents={[
        checkPermission("UpdateSubCPMK") && (
            <Button
              variant="secondary"
              onClick={() => ubahSubCPMK()}
            >
              Ubah SubCPMK
            </Button>
        )
        ,
        checkPermission("DeleteSubCPMK") && (

            <Button
          variant="tertiary"
          onClick={() => setShowModalKonfirmasiHapusSubCPMK(true)}
        >
          Hapus
        </Button>
        )
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusSubCPMK}
           title={"Konfirmasi Hapus Sub CPMK"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusSubCPMK(false)}>Batal</Button></Link>
          <Button
            variant="danger"
            onClick={() => hapus()}
          >
            Hapus
          </Button>
        </Modal>
        
      ]}
    />
  );
};

export default DetailSubCPMK;
