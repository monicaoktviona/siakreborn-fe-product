import React, { useEffect, useState } from "react";

import { List } from "@/commons/components";
import CardRow from "./CardRow";
import searchItems from "@/commons/utils/Table/SearchItems";
import SearchField from "@/commons/components/Table/SearchField";
import filterItems from "@/commons/utils/Table/FilterItems";
import FilterField from "@/commons/components/Table/FilterField";
import MultiFilterField from "@/commons/components/Table/MultiFilterField";

const ListComponentCardLayout = ({
  items,
  isSearchable,
  itemsAttrs,
  itemsEvents,
  filterFields,
}) => {
  const [viewItems, setViewItems] = useState(items);

  const [searchText, setSearchText] = useState("");

  const [filterTextList, setFilterTextList] = useState([]);

  useEffect(() => {
    var newItems = items;
    newItems = searchItems(newItems, searchText, itemsAttrs, ['logoUrl']);
    newItems = filterItems(newItems, filterTextList);

    setViewItems(newItems);
  }, [searchText, filterTextList]);

  useEffect(() => {
    setFilterTextList(
      filterFields?.map((filterField) => ({ ...filterField, text: [""] })),
    );
  }, [filterFields]);

  const updateFilterText = (newFilterText, featureName) =>
    setFilterTextList((prev) =>
      prev.map((filterText) =>
        filterText.featureName == featureName
          ? { ...filterText, text: newFilterText }
          : filterText,
      ),
    );

  const updateSearchText = (newSearchText) => setSearchText(newSearchText);

  return (
    <>
      {isSearchable && <SearchField updateSearchText={updateSearchText} />}
      {filterFields?.map(
        (filterField) =>
          filterField && (
            filterField.isMultiSelection
            ?
            <MultiFilterField
              filterField={filterField}
              updateFilterText={updateFilterText}
            />
            :
            <FilterField
              filterField={filterField}
              updateFilterText={updateFilterText}
            />
          ),
      )}
      <List column="4">
        {viewItems?.map((collection) =>
          collection?.map((item) => (
            <CardRow
              key={item.id}
              item={item}
              itemsAttrs={itemsAttrs}
              itemsEvents={itemsEvents}
            />
          ))
        )}
      </List>
    </>
  );
};

export default ListComponentCardLayout;
