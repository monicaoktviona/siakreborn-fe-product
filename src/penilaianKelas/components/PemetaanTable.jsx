/*
	Generated on 12/02/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.14
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";

import * as Layouts from "@/commons/layouts";

const PemetaanTable = ({ capaianDataList, capaianList }) => {
  const { checkPermission } = useAuth();

  return (
    <Layouts.ListComponentTableLayout
      items={[capaianDataList]}
      itemsAttrs={[
        {
          id: "nama",
          condition: "isHeading",
          label: "Nama",
          featureName: "nama",
        },
      ].concat(
        capaianList.map((c) => {
          return {
            id: c.id,
            condition: "IsHeading",
            label: c.kode,
            featureName: c.capaianId,
          };
        })
      )}
    />
  );
};

export default PemetaanTable;

