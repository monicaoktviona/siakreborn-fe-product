/*
	Generated on 15/04/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteMataKuliahPrasyarat from '../services/deleteMataKuliahPrasyarat';

import * as Layouts from "@/commons/layouts";


const DetailMataKuliahPrasyarat = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const [showModalKonfirmasiHapusMataKuliahPrasyarat, setShowModalKonfirmasiHapusMataKuliahPrasyarat] = React.useState(false); 
    const ubahMataKuliahPrasyarat = async () => {
      navigate(
        '/matakuliah/:id/prasyarat/ubah?'
        + `prasyaratId=${data.id}`
        
      );
    };
    
    
  
    const hapus = async () => {
      await deleteMataKuliahPrasyarat({
        invalid: data.id,
      });
      navigate('/matakuliah/:id');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "kodeMataKuliah",
          condition: "",
          label: "Kode Mata Kuliah",
          featureName: "mataKuliahKode",
        }
        ,
        {
          id: "kodeKurikulum",
          condition: "",
          label: "Kode Kurikulum",
          featureName: "mataKuliahKurikulumName",
        }
        ,
        {
          id: "namaMataKuliah",
          condition: "",
          label: "Nama Mata Kuliah",
          featureName: "mataKuliahNama",
        }
        ,
        {
          id: "bobot",
          condition: "",
          label: "Bobot",
          featureName: "mataKuliahSks",
        }
        ,
        {
          id: "syarat",
          condition: "",
          label: "Syarat",
          featureName: "syarat",
        }
        
      ]}
      itemsEvents={[
            checkPermission("UpdateMataKuliahPrasyarat") &&  (
              <Button
                variant="secondary"
                onClick={() => ubahMataKuliahPrasyarat()}
              >
                Ubah Mata Kuliah Prasyarat
              </Button>
            )
        ,
            checkPermission("DeleteMataKuliahPrasyarat") &&  (
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusMataKuliahPrasyarat(true)}
              >
                Hapus
              </Button>
            )
        
      ]}
      itemsModals={[
        <Modal
           isShow={showModalKonfirmasiHapusMataKuliahPrasyarat}
           title={"Konfirmasi Hapus Mata Kuliah Prasyarat"}
           text={"Are you sure want to proceed?"}
        >
           <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusMataKuliahPrasyarat(false)}>Batal</Button></Link>
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

export default DetailMataKuliahPrasyarat;
