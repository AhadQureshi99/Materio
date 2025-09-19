import React from "react";
import AdminHeader from "./AdminHeader";
import ListCard from "./Add_product/ListCard";
import Filters from "./Add_product/Filters";

const ListSection = ({ onModeChange, darkMode }) => {
  return (
    <>
      <AdminHeader onModeChange={onModeChange} darkMode={darkMode} />
      <div className="p-4">
        <ListCard />
        <Filters/>
      </div>
    </>
  );
};

export default ListSection;
