/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";
import isSelectedFeature from "@/commons/utils/isSelectedFeature";

import * as Layouts from "@/commons/layouts";

const KomponenTable = ({ komponenPenilaianDataList }) => {
  const { checkPermission } = useAuth();
  const { id } = useParams();

  return (
    <Layouts.ListComponentTableLayout
      items={[komponenPenilaianDataList]}
      itemsAttrs={[
        {
          id: "komponen",
          condition: "isHeading",
          label: "Komponen",
          featureName: "nama",
        },
        {
          id: "bobot",
          condition: "isHeading",
          label: "Bobot",
          featureName: "bobot",
        },
      ]}
      itemsEvents={(komponenItem) => [
        checkPermission("UpdateKomponenPenilaian") && (
          <Link to={`/penilaian-kelas/${id}/komponen/${komponenItem.id}/ubah`}>
            <Button variant="primary">Ubah Komponen</Button>
          </Link>
        ),
      ]}
      itemsModals={(komponenItem) => []}
    />
  );
};

export default KomponenTable;
