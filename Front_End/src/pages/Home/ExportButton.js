import React from 'react';
import * as XLSX from 'xlsx';
import "../../styles/Exportbutton.css";

const ExportButton = ({ data, fileName }) => {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName + '.xlsx');
  };

  return (
    <button onClick={exportToExcel} className='btn export_excel' >
      Export to Excel
    </button>
  );
};

export default ExportButton;
