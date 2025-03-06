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
    const ubahCPL = async () => {
      navigate(
        '/cpl/ubah?'
        + `id=${data.id}`
        
      );
    };
    
    
  
    const hapus = async () => {
      await deleteCPL({
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
            <Button
              variant="secondary"
              onClick={() => ubahCPL()}
            >
              Ubah CPL
            </Button>
        ,
            <Button
          variant="tertiary"
          onClick={() => hapusCPL()}
        >
          Hapus
        </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailCPL;
