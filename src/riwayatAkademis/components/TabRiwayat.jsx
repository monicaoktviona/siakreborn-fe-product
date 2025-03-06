/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React, { useContext } from 'react';
import { Tab } from '@/commons/components'
import BerdasarkanTerm from '../containers/BerdasarkanTerm.jsx'
import BerdasarkanMataKuliah from '../containers/BerdasarkanMataKuliah.jsx'


const TabRiwayat = () => {
  
  return (
    <Tab
      tabs={[
        {
          id: 'BerdasarkanTerm',
          name: 'Berdasarkan Term',
          children: <BerdasarkanTerm />
        }
    ,
        {
          id: 'BerdasarkanMataKuliah',
          name: 'Berdasarkan Mata Kuliah',
          children: <BerdasarkanMataKuliah />
        }
      ]}
      id='0'
    />
  );
};

export default TabRiwayat;
