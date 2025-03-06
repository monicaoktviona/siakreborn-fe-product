/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import graduateMahasiswa from '../services/graduateMahasiswa'

import * as Layouts from "@/commons/layouts";

const MahasiswaTable = ({ mahasiswaDataList,

	}) => {
  const { checkPermission } = useAuth();
  	const {  } = useParams();
  
  const [showModalKonfirmasiPelulusan, setShowModalKonfirmasiPelulusan] = React.useState(false);
  const luluskan = async  (mahasiswa) => {
    await graduateMahasiswa({
        id: mahasiswa.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mahasiswaDataList]}
  	  isSearchable
  	  itemsAttrs={[
          {
            id: "nama",
            condition: "isHeading",
            label: "Nama",
  		  featureName: "nama",
            editable:  false 
          }
  ,
          {
            id: "angkatan",
            condition: "isHeading",
            label: "Angkatan",
  		  featureName: "tahunAngkatan",
            editable:  false 
          }
  ,
          {
            id: "statusAkademik",
            condition: "isHeading",
            label: "Status Akademik",
  		  featureName: "statusAkademik",
            editable:  false 
          }
  ]}
        itemsEvents={(mahasiswaItem) => [
          <Link to=''>
            <Button
          	size="sm"
          	variant=
          				"secondary"
              onClick={() => setShowModalKonfirmasiPelulusan(true)}
            >
              Luluskan
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(mahasiswaItem) => [
  	      <Modal
  	         isShow={showModalKonfirmasiPelulusan}
  	         title={"Konfirmasi Pelulusan"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiPelulusan(false)}>Batal</Button></Link>
  	      <Button
  	        variant="secondary"
  	        onClick={() => luluskan(mahasiswaItem)}
  	      >
  	        Luluskan
  	      </Button>
  	      </Modal>
  	      
        ]}
  	/>
  )
};

export default MahasiswaTable;
