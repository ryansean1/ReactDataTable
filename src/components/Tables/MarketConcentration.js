import React from "react";
import MUIDataTable from "mui-datatables";
import data from "../Data/marketconcentration";

class MarketConentration extends React.Component {
  render() {
    const columns = [
      {
        label: "Date",
        name: "RprtDt",
        options: { filter: true },
      },
      { label: "State", name: "StateCd", options: { filter: false } },
      {
        label: "Service District",
        name: "SrvcDstrctNm",
        options: { filter: true },
      },
      { label: "Support Class", name: "SuppClass", options: { filter: false } },
      {
        label: "Payment share of top 10",
        name: "PymntShareOfTop10",
        options: { filter: true },
      },
      { label: "Payment Band", name: "PymntBnd", options: { filter: false } },
      { label: "Provider Count", name: "PrvdrCnt", options: { filter: false } },
      {
        label: "Participant Count",
        name: "PrtcpntCnt",
        options: { filter: true },
      },
    ];

    const options = {
      filterType: "multiselect",
      responsive: "scroll",
      print: false,
      selectableRows: "none",
      filter: true,
      search: false,
      viewColumns: false,
    };
    return (
      <MUIDataTable
        title={"Market Concentration"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}
export default MarketConentration;
