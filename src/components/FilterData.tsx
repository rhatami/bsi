import {
  Row,
  Tarh,
  TarhName,
  TarhNameFa,
  CustomerType,
  Max_Amount,
  Payback_Type,
} from "./Types";
import Jari_Talaei from "../Tarh/Jari_Talaei";
import Jari_Talaei_Kasbokar from "../Tarh/Jari_Talaei_Kasbokar";
import Misagh_Haghighi from "../Tarh/Misagh_Haghighi";
import Misagh_Hoghughi from "../Tarh/Misagh_Hoghughi";
import Sana from "../Tarh/Sana";
import Sana_Kasbokar from "../Tarh/Sana_Kasbokar";
import Gharzolhasane_Sepas from "../Tarh/Gharzolhasane_Sepas";
import Morabehe_Sepas from "../Tarh/Morabehe_Sepas";
import Saba_Jari from "../Tarh/Saba_Jari";
import Saba_KootahModdat from "../Tarh/Saba_KootahModdat";
import Timche2 from "../Tarh/Timche2";
import Timche3 from "../Tarh/Timche3";
import Timche4 from "../Tarh/Timche4";
import Timche6 from "../Tarh/Timche6";

export interface Filter {
  DepAmo: number;
  DepPer: number;
  CusTyp: CustomerType;
  TarhNm: string;
}

export interface DataRow extends Row {
  id: number;
  TarhName: string;
  LoanAmount: number;
  Installment: number;
}

interface TarhArray {
  [index: string]: Tarh;
}

const TarhArr: TarhArray = {
  [TarhName.JT]: Jari_Talaei,
  [TarhName.JTK]: Jari_Talaei_Kasbokar,
  [TarhName.MS]: Misagh_Haghighi,
  [TarhName.MSH]: Misagh_Hoghughi,
  [TarhName.SN]: Sana,
  [TarhName.SNK]: Sana_Kasbokar,
  [TarhName.GSP]: Gharzolhasane_Sepas,
  [TarhName.MSP]: Morabehe_Sepas,
  [TarhName.SBJ]: Saba_Jari,
  [TarhName.SBK]: Saba_KootahModdat,
  [TarhName.TM2]: Timche2,
  [TarhName.TM3]: Timche3,
  [TarhName.TM4]: Timche4,
  [TarhName.TM6]: Timche6,
};

function PMT(
  LoanAmount: number,
  InterestRate: number,
  PaybackPeriod: number,
  PaybackType: Payback_Type
) {
  InterestRate = InterestRate / 1200;

  if (PaybackType === Payback_Type.OneTime) {
    const interest = LoanAmount * InterestRate * PaybackPeriod;
    return LoanAmount + interest;
  }

  if (InterestRate === 0) return LoanAmount / PaybackPeriod;

  let pmt, pvif;

  pvif = Math.pow(1 + InterestRate, PaybackPeriod);
  pmt = (InterestRate * (LoanAmount * pvif)) / (pvif - 1);

  return pmt;
}

function getDataRow(
  Tarh: Tarh,
  DepositAmount: number,
  DepositPeriod: number,
  CusType: CustomerType
) {
  let DataRows: DataRow[] = [];
  let ID = 0;
  let LoanAmount = 0;
  for (let row of Tarh.Rows) {
    if (row.DepositPeriod == DepositPeriod) {
      LoanAmount = (DepositAmount * row.Ratio) / 100;
      // don't consider loan amounts below the Tarh loan range
      if (LoanAmount < Tarh.MinLoan) continue;
      // correct loan amounts above the Tarh max loan
      if (LoanAmount > Tarh.MaxLoan) LoanAmount = Tarh.MaxLoan;
      // correct loan amounts above the Real person's max loan (for MSP)
      if (
        (CusType == CustomerType.Real ||
          CusType == CustomerType.Legal_Personel) &&
        LoanAmount > Max_Amount.Real_Max
      )
        LoanAmount = Max_Amount.Real_Max;

      // Add Data to array
      DataRows.push({
        ...row,
        id: ID,
        TarhName: TarhNameFa[Tarh.Name],
        LoanAmount: LoanAmount,
        Installment: Math.round(
          PMT(LoanAmount, row.InterestRate, row.PaybackPeriod, row.PaybackType)
        ),
      });
    }
  }

  return DataRows;
}

function dataID(dataRow: DataRow[]) {
  let id = 1;
  for (let row of dataRow) {
    row.id = id;
    id += 1;
  }
  return dataRow;
}

export function FilterData(filter: Filter) {
  // converting to numbers if string
  filter.DepAmo = Number(filter.DepAmo);
  filter.DepPer = Number(filter.DepPer);

  let Filter: Tarh[] = [];

  // Filter by TarhName , Customer Type & Deposite Period
  if (filter.TarhNm != "All") {
    // add diffrent forms of a Tarh
    let SubTarhs: Tarh[] = [TarhArr[filter.TarhNm]];

    if (filter.TarhNm === TarhName.GSP) SubTarhs.push(Morabehe_Sepas);
    if (filter.TarhNm === TarhName.SBJ) SubTarhs.push(Saba_KootahModdat);
    if (filter.TarhNm === TarhName.TM2)
      SubTarhs.push(Timche3, Timche4, Timche6);

    for (let tarh of SubTarhs)
      if (
        tarh.CustomerType.includes(filter.CusTyp) &&
        tarh.DepositePeriod.includes(filter.DepPer)
      )
        Filter.push(tarh);
  }
  // All Tarh
  else {
    for (let index in TarhArr) {
      if (
        TarhArr[index].CustomerType.includes(filter.CusTyp) &&
        TarhArr[index].DepositePeriod.includes(filter.DepPer)
      )
        Filter.push(TarhArr[index]);
    }
  }

  // Filter by DepositAmount and creating Final Result in DataRow
  let Result: DataRow[] = [];
  for (let tarh of Filter) {
    let dataRow = getDataRow(tarh, filter.DepAmo, filter.DepPer, filter.CusTyp);
    if (dataRow) Result = Result.concat(dataRow);
  }

  // returning null if no filtered data found
  if (Result.length == 0) return Result;

  // return data with unique id for each row and sort by LoanAmount Desc
  return dataID(Result).sort((a, b) => b.LoanAmount - a.LoanAmount);
}
