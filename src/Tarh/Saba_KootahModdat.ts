import {Row,Payback_Type,Tarh , Max_Amount , TarhName , CustomerType} from "../components/Types";

const Installment = Payback_Type.Installment;
const OneTime = Payback_Type.OneTime;

const TarhRows:Row[] = [
    {DepositPeriod:3,Ratio:150,PaybackType:OneTime,PaybackPeriod:3,InterestRate:17},
    {DepositPeriod:3,Ratio:150,PaybackType:OneTime,PaybackPeriod:6,InterestRate:21},
    {DepositPeriod:6,Ratio:150,PaybackType:OneTime,PaybackPeriod:6,InterestRate:17},
    {DepositPeriod:3,Ratio:50,PaybackType:Installment,PaybackPeriod:12,InterestRate:15},
    {DepositPeriod:3,Ratio:80,PaybackType:Installment,PaybackPeriod:12,InterestRate:20},
    {DepositPeriod:3,Ratio:100,PaybackType:Installment,PaybackPeriod:12,InterestRate:21},
    {DepositPeriod:6,Ratio:100,PaybackType:Installment,PaybackPeriod:12,InterestRate:16},
    {DepositPeriod:6,Ratio:80,PaybackType:Installment,PaybackPeriod:18,InterestRate:17},
    {DepositPeriod:6,Ratio:100,PaybackType:Installment,PaybackPeriod:18,InterestRate:19},
    {DepositPeriod:9,Ratio:150,PaybackType:Installment,PaybackPeriod:12,InterestRate:16},
    {DepositPeriod:9,Ratio:100,PaybackType:Installment,PaybackPeriod:18,InterestRate:15},
    {DepositPeriod:9,Ratio:150,PaybackType:Installment,PaybackPeriod:18,InterestRate:19},
    {DepositPeriod:9,Ratio:80,PaybackType:Installment,PaybackPeriod:24,InterestRate:16},
    {DepositPeriod:9,Ratio:100,PaybackType:Installment,PaybackPeriod:24,InterestRate:18},
    {DepositPeriod:9,Ratio:150,PaybackType:Installment,PaybackPeriod:24,InterestRate:21},
    {DepositPeriod:12,Ratio:200,PaybackType:Installment,PaybackPeriod:12,InterestRate:16},
    {DepositPeriod:12,Ratio:150,PaybackType:Installment,PaybackPeriod:18,InterestRate:17},
    {DepositPeriod:12,Ratio:200,PaybackType:Installment,PaybackPeriod:18,InterestRate:20},
    {DepositPeriod:12,Ratio:100,PaybackType:Installment,PaybackPeriod:24,InterestRate:15},
    {DepositPeriod:12,Ratio:150,PaybackType:Installment,PaybackPeriod:24,InterestRate:19},
    {DepositPeriod:12,Ratio:200,PaybackType:Installment,PaybackPeriod:24,InterestRate:23},
]

const Saba_KootahModdat:Tarh = {
    Name:TarhName.SBK,
    CustomerType:[CustomerType.Business,CustomerType.Legal],
    MinLoan:150_000_000,
    MaxLoan : Max_Amount.Max,
    Rows:TarhRows,
    DepositeRange:[3,4,5,6,7,8,9,10,11,12]
}

export default Saba_KootahModdat
