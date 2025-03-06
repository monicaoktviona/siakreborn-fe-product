/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteMataKuliah from '../services/deleteMataKuliah';

import * as Layouts from "@/commons/layouts";


const DetailMataKuliah = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusMataKuliah, setShowModalKonfirmasiHapusMataKuliah] = React.useState(false); 
    
    const ubahMataKuliah = async () => {
      navigate(
        '/matakuliah/ubah?'
        + `id=${data.id}`
        
      );
    };
    
  
    const hapus = async () => {
      await deleteMataKuliah({
        id: data.id,
      });
      navigate('/matakuliah');
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
          id: "nama",
          condition: "",
          label: "Nama",
          featureName: "nama",
        }
        ,
        {
          id: "sKS",
          condition: "",
          label: "SKS",
          featureName: "sks",
        }
        ,
        {
          id: "term",
          condition: "",
          label: "Term",
          featureName: "term",
        }
        ,
        {
          id: "kurikulum",
          condition: "",
          label: "Kurikulum",
          featureName: "kurikulumName",
        }
        
      ]}
      itemsEvents={[
            <Button
              variant="tertiary"
              onClick={() => setShowModalKonfirmasiHapusMataKuliah(true)}
            >
              Hapus
            </Button>
        ,
            <Button
          variant="secondary"
          onClick={() => ubahMataKuliah()}
        >
          Ubah Mata Kuliah
        </Button>
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusMataKuliah}
           title={"Konfirmasi Hapus Mata Kuliah"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusMataKuliah(false)}>Batal</Button></Link>
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

export default DetailMataKuliah;
