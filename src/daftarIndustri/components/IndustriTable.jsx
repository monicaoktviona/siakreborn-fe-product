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

import * as Layouts from "@/commons/layouts";

const IndustriTable = ({ industriDataList, domainPerusahaanSelectionField,

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (industriItem) => {
    isMobile() && navigate(`/daftarindustri/detail/:id`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[industriDataList, domainPerusahaanSelectionField]}
  	  detail={detail}
  	  filterFields={[
  	    {
  	      label: "Domain Bidang Perusahaan",
  	      featureName: "domain",
  	      options: domainPerusahaanSelectionField,
            editable: false,
  	    }
  	  ]}
  	  itemsAttrs={[
          {
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
  		  featureName: "invalid",
            editable:  false 
          }
  ,
          {
            id: "tahunLulus",
            condition: "isHeading",
            label: "Tahun Lulus",
  		  featureName: "invalid",
            editable:  false 
          }
  ,
          {
            id: "domainBidangPerusahaan",
            condition: "isHeading",
            label: "Domain Bidang Perusahaan",
  		  featureName: "domain",
            editable:  false 
          }
  ,
          {
            id: "jumlahKaryawan",
            condition: "isHeading",
            label: "Jumlah Karyawan",
  		  featureName: "jumlahKaryawan",
            editable:  false 
          }
  ,
          {
            id: "filterTahunLulus",
            condition: "isHeading",
            label: "Filter Tahun Lulus",
  		  featureName: "",
            editable:  false 
          }
  ,
          {
            id: "filterDomainBidangPerusahaan",
            condition: "isHeading",
            label: "Filter Domain Bidang Perusahaan",
  		  featureName: "domainPerusahaanSelectionField",
            editable:  false 
          }
  ]}
        itemsEvents={(industriItem) => [
          <Link to={`/daftarindustri/detail/:id`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(industriItem) => [
        ]}
  	/>
  )
};

export default IndustriTable;
