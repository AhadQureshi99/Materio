import React, { useState } from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar";
import ListSection from "../../../components/admin/ListSection";

const ProductList = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleModeChange = (mode) => {
    setDarkMode(mode);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "#28243D" : "#F4F5FA",
          color: darkMode ? "white" : "black",
        }}
        className="container-fluid main-container"
      >
        <div className="row">
          <div className="d-none col-xl-2 d-xl-block admin-sidebar-col">
            <AdminSidebar />
          </div>
          <div className="col-xl-10 col-12 dashboard-container">
            <ListSection
              onModeChange={handleModeChange}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
