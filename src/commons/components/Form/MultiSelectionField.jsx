import React, { forwardRef, useEffect, useState } from "react";
import CheckBoxField from "./CheckBoxField";
import { capitalize } from "@/commons/utils/capitalize";

const MultiSelectionField = forwardRef((props, ref) => {
  const { label, variant, options = [], defaultValue } = props; // Pastikan options memiliki default []
  let propsChild = { ...props };
  propsChild["label"] = "";
  delete propsChild.options;

  const [value, setValue] = useState([]);

  useEffect(() => {
    let tempDefaultValue = [];

    if (!Array.isArray(options)) {
      console.error("Error: options is not an array", options);
      return;
    }

    if (!defaultValue) {
      tempDefaultValue = options.map(() => false);
    } else if (typeof defaultValue === "string") {
      const selectedValues = defaultValue.split(",");
      tempDefaultValue = options.map((item) => selectedValues.includes(item.id));
    } else if (Array.isArray(defaultValue)) {
      tempDefaultValue = options.map((item) => defaultValue.includes(item.id));
    } else {
      tempDefaultValue = options.map(() => false);
    }

    setValue(tempDefaultValue);
  }, [defaultValue, options]);

  useEffect(() => {
    if (value.length > 0) {
      const selectedOptions = options
        .filter((_, index) => value[index])
        .map((option) => option.id)
        .join(",");
      
      props.onChange(selectedOptions);
    }
  }, [value, options, props]);

  const handleChange = (index, updatedCheck) => {
    setValue((prev) => {
      const newValue = [...prev];
      newValue[index] = updatedCheck;
      return newValue;
    });
  };

  return (
    <div className="form-control break-inside-avoid" {...variant}>
      {label && <label className="label font-bold uppercase">{label}</label>}
      {Array.isArray(options) && options.length > 0 ? (
        value.length === options.length &&
        options.map((option, index) => (
          <CheckBoxField
            ref={ref}
            {...propsChild}
            {...variant}
            label={capitalize(option.name)}
            key={option.id}
            checked={value[index]}
            value={option.id}
            name={label.replace(" ", "")}
            onChange={() => handleChange(index, !value[index])}
          />
        ))
      ) : (
        <p className="text-red-500">No options available</p> // Pesan jika options kosong
      )}
    </div>
  );
});

export default MultiSelectionField;
