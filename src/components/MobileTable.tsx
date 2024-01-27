import { Grid } from "@mui/material";
import { DataRow } from "./FilterData";
import { Payback_Type } from "./Types";

const MobileTable = ({ Data }: { Data: DataRow[] }) => {
  if (Data.length === 0)
    return (
      <div key="noData" className="mobileNoData">
        با فیلترهای انتخابی شما طرحی یافت نشد
      </div>
    );
  return (
    <div key="mobileTable" className="mobileTable">
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

function thousandSeperator(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default MobileTable;
