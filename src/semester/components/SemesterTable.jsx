/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import deleteSemester from '../services/deleteSemester'

import * as Layouts from "@/commons/layouts";

const SemesterTable = ({ semesterDataList,

	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiHapusSemester, setShowModalKonfirmasiHapusSemester] = React.useState(false);
  const hapus = async  (semester) => {
    await deleteSemester({
        id: semester.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[semesterDataList]}
  	  isSearchable
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
            id: "status",
            condition: "isHeading",
            label: "Status",
  		  featureName: "status",
            editable:  false 
          }
  ,
          {
            id: "tanggalMulai",
            condition: "isHeading",
            label: "Tanggal Mulai",
  		  featureName: "tanggalMulai",
            editable:  false 
          }
  ,
          {
            id: "tanggalSelesai",
            condition: "isHeading",
            label: "Tanggal Selesai",
  		  featureName: "tanggalSelesai",
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
        itemsEvents={(semesterItem) => [
          checkPermission("DeleteSemester") &&  (
            <Link to=''>
              <Button
            	size="sm"
            	variant=
            				"info"
                onClick={() => setShowModalKonfirmasiHapusSemester(true)}
              >
                Hapus
              </Button>
            </Link>
            
          )
          
  ,
          checkPermission("UpdateSemester") &&  (
    <Link to={`/semester/ubah?id=${semesterItem.id}`}>
      <Button
    	size="sm"
    	variant=
    				"secondary"
      >
        Ubah
      </Button>
    </Link>
    
  )
  
        ]}
    	  itemsModals={(semesterItem) => [
  	      <Modal
  	         isShow={showModalKonfirmasiHapusSemester}
  	         title={"Konfirmasi Hapus Semester"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiHapusSemester(false)}>Batal</Button></Link>
  	      <Button
  	        variant="danger"
  	        onClick={() => hapus(semesterItem)}
  	      >
  	        Hapus
  	      </Button>
  	      </Modal>
  	      
        ]}
  	/>
  )
};

export default SemesterTable;
