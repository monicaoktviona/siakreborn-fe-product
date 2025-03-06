import React, { useState } from "react";

const TableRowLayout = ({ viewItems, itemsAttrs, handleChange }) => {
  const [editedValues, setEditedValues] = useState({});

  const handleInputChange = (id, featureName, value) => {
    setEditedValues((prev) => {
      const updatedValues = {
        ...prev,
        [id]: { ...prev[id], [featureName]: value },
      };

      handleChange({ id, ...updatedValues[id] });

      return updatedValues;
    });
  };

  return (
    viewItems &&
    viewItems.map((collection) => collection?.map(item => {
      var itemMap = { id: item?.id };
      itemsAttrs.map((itemsAttr) => {
        if(itemsAttr.editable) {
          itemMap[itemsAttr.featureName] = (
            <div className="table-cell bg-gray-100 rounded-md border border-gray-200">
              <input
                type="text"
                name={item[itemsAttr.featureName]}
                value={editedValues[item.id]?.[itemsAttr.featureName] ?? item[itemsAttr.featureName]}
                onChange={(e) => handleInputChange(item.id, itemsAttr.featureName, e.target.value)}
                className="w-28 rounded-md p-1 focus:border-gray-300 bg-transparent"
              />
            </div>
          );
        } else itemMap[itemsAttr.featureName] = item[itemsAttr.featureName];
      });
      return itemMap;
    })).flat()
  );
};

export default TableRowLayout;
