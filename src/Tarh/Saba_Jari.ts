import {Row,Payback_Type,Tarh , Max_Amount , TarhName , CustomerType} from "../components/Types";

const Installment = Payback_Type.Installment;
const OneTime = Payback_Type.OneTime;

const TarhRows:Row[] = [
    {DepositPeriod:3,Ratio:150,PaybackType:OneTime,PaybackPeriod:3,InterestRate:14},
    {DepositPeriod:3,Ratio:150,PaybackType:OneTime,PaybackPeriod:6,InterestRate:19},
    {DepositPeriod:6,Ratio:150,PaybackType:OneTime,PaybackPeriod:6,InterestRate:14},
    {DepositPeriod:3,Ratio:50,PaybackType:Installment,PaybackPeriod:12,InterestRate:11},
    {DepositPeriod:3,Ratio:80,PaybackType:Installment,PaybackPeriod:12,InterestRate:17},
    {DepositPeriod:3,Ratio:100,PaybackType:Installment,PaybackPeriod:12,InterestRate:19},
    {DepositPeriod:6,Ratio:100,PaybackType:Installment,PaybackPeriod:12,InterestRate:11},
    {DepositPeriod:6,Ratio:80,PaybackType:Installment,PaybackPeriod:18,InterestRate:13},
    {DepositPeriod:6,Ratio:100,PaybackType:Installment,PaybackPeriod:18,InterestRate:16},
    {DepositPeriod:9,Ratio:150,PaybackType:Installment,PaybackPeriod:12,InterestRate:11},
    {DepositPeriod:9,Ratio:100,PaybackType:Installment,PaybackPeriod:18,InterestRate:11},
    {DepositPeriod:9,Ratio:150,PaybackType:Installment,PaybackPeriod:18,InterestRate:16},
    {DepositPeriod:9,Ratio:80,PaybackType:Installment,PaybackPeriod:24,InterestRate:11},
    {DepositPeriod:9,Ratio:100,PaybackType:Installment,PaybackPeriod:24,InterestRate:15},
    {DepositPeriod:9,Ratio:150,PaybackType:Installment,PaybackPeriod:24,InterestRate:19},
    {DepositPeriod:12,Ratio:200,PaybackType:Installment,PaybackPeriod:12,InterestRate:12},
    {DepositPeriod:12,Ratio:150,PaybackType:Installment,PaybackPeriod:18,InterestRate:13},
    {DepositPeriod:12,Ratio:200,PaybackType:Installment,PaybackPeriod:18,InterestRate:17},
    {DepositPeriod:12,Ratio:100,PaybackType:Installment,PaybackPeriod:24,InterestRate:11},
    {DepositPeriod:12,Ratio:150,PaybackType:Installment,PaybackPeriod:24,InterestRate:16},
    {DepositPeriod:12,Ratio:200,PaybackType:Installment,PaybackPeriod:24,InterestRate:19},
]

const Saba_Jari:Tarh = {
    Name:TarhName.SBJ,
    CustomerType:[CustomerType.Business,CustomerType.Legal],
    MinLoan:150_000_000,
    MaxLoan : Max_Amount.Max,
    Rows:TarhRows,
    DepositeRange:[3,4,5,6,7,8,9,10,11,12]
}

export default Saba_Jari
