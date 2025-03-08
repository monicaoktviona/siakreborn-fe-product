/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteCPL from '../services/deleteCPL';

import * as Layouts from "@/commons/layouts";


const DetailCPL = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusCPL, setShowModalKonfirmasiHapusCPL] = React.useState(false);  
    const ubahCPL = async () => {
      navigate(
        '/cpl/ubah?'
        + `id=${data.id}`
        
      );
    };
    
    
  
    const hapus = async () => {
      await deleteCPL({
        id: data.id,
      });
      navigate('/cpl');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "kode",
          condition: "",
          label: "Kode",
          featureName: "kode",
        }
        ,
        {
          id: "deskripsi",
          condition: "",
          label: "Deskripsi",
          featureName: "deskripsi",
        }
        
      ]}
      itemsEvents={[
        checkPermission("UpdateCPL") &&  (
            <Button
              variant="secondary"
              onClick={() => ubahCPL()}
            >
              Ubah CPL
            </Button>
        )
        ,
        checkPermission("DeleteCPL") &&  (
            <Button
          variant="tertiary"
          onClick={() => setShowModalKonfirmasiHapusCPL(true)}
        >
          Hapus
        </Button>
        )
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusCPL}
           title={"Konfirmasi Hapus CPL"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusCPL(false)}>Batal</Button></Link>
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

export default DetailCPL;
