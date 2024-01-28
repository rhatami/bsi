import { Grid, MenuItem, Select } from "@mui/material";
import { DataRow } from "./FilterData";
import { Payback_Type } from "./Types";

const MobileTable = ({
  Data,
  orderBy,
  setOrderBy,
}: {
  Data: DataRow[];
  orderBy: string;
  setOrderBy: (value: string) => void;
}) => {
  if (Data.length === 0)
    return (
      <div key="noData" className="mobileNoData">
        با فیلترهای انتخابی شما طرحی یافت نشد
      </div>
    );
  return (
    <div key="mobileTable" className="mobileTable">
      <MobileSort orderBy={orderBy} setOrderBy={setOrderBy} />
      {Data.map((row) => (
        <Grid container key="mobileRow" className="mobileRow" direction="row">
          <Grid
            item
            key="mobileRightGrid"
            className="mobileRightGrid"
            sm={8}
            xs={8}
          >
            <div className="mobileRowTarh topRibbon">{row.TarhName}</div>
            <p className="mobileRowAmount">
              {thousandSeperator(row.LoanAmount)} ریال
            </p>
            <p className="mobileRowInstallment">
              هر قسط {thousandSeperator(row.Installment)} ریال
            </p>
            <p className="mobileRowRatio">
              %{row.Ratio} میانگین {row.DepositPeriod} ماهه
            </p>
          </Grid>
          <Grid
            item
            key="mobileLeftGrid"
            className="mobileLeftGrid ribbon"
            sm={4}
            xs={4}
          >
            <p className="mobileRowInterest">{row.InterestRate} %</p>
            <p className="mobileRowPaybackPeriod">{row.PaybackPeriod} ماهه</p>
            <p className="mobileRowPaybackType">
              {row.PaybackType == Payback_Type.Installment ? "اقساطی" : "یکجا"}
            </p>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

const MobileSort = ({
  orderBy,
  setOrderBy,
}: {
  orderBy: string;
  setOrderBy: (value: string) => void;
}) => {
  return (
    <div key="mobileSortDiv" className="mobileSortDiv">
      <span className="mobileSortText">مرتب سازی بر اساس:</span>
      <Select
        defaultValue={orderBy}
        className="mobileSortSelect"
        onChange={(e) => setOrderBy(e.target.value)}
      >
        <MenuItem value="amount">مبلغ</MenuItem>
        <MenuItem value="paybackPeriod">مدت بازپرداخت</MenuItem>
        <MenuItem value="installment">مبلغ قسط</MenuItem>
        <MenuItem value="interest">نرخ سود</MenuItem>
        <MenuItem value="name">نام طرح</MenuItem>
        <MenuItem value="paybackType">نوع بازپرداخت</MenuItem>
      </Select>
    </div>
  );
};

function thousandSeperator(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function sortRows(Data: DataRow[], orderBy: string) {
  if (orderBy == "amount")
    return Data.sort((a, b) => b.LoanAmount - a.LoanAmount);
  if (orderBy == "paybackPeriod")
    return Data.sort((a, b) => b.PaybackPeriod - a.PaybackPeriod);
  if (orderBy == "installment")
    return Data.sort((a, b) => a.Installment - b.Installment);
  if (orderBy == "interest")
    return Data.sort((a, b) => a.InterestRate - b.InterestRate);
  if (orderBy == "name")
    return Data.sort((a, b) => a.TarhName.localeCompare(b.TarhName));
  if (orderBy == "paybackType")
    return Data.sort((a, b) => a.PaybackType.localeCompare(b.PaybackType));

  return Data;
}

export default MobileTable;
