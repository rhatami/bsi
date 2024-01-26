import {Row,Payback_Type,Tarh , Max_Amount,TarhName , CustomerType} from "../components/Types";

const Installment = Payback_Type.Installment;

const TarhRows:Row[] = [
    {DepositPeriod:2,Ratio:100,PaybackPeriod:18,InterestRate:23,PaybackType:Installment},
    {DepositPeriod:3,Ratio:100,PaybackPeriod:18,InterestRate:22,PaybackType:Installment},
    {DepositPeriod:4,Ratio:100,PaybackPeriod:18,InterestRate:21,PaybackType:Installment},
    {DepositPeriod:5,Ratio:100,PaybackPeriod:18,InterestRate:20,PaybackType:Installment},
    {DepositPeriod:6,Ratio:100,PaybackPeriod:18,InterestRate:19,PaybackType:Installment},
    {DepositPeriod:7,Ratio:100,PaybackPeriod:18,InterestRate:18,PaybackType:Installment},
    {DepositPeriod:8,Ratio:100,PaybackPeriod:18,InterestRate:17,PaybackType:Installment},
    {DepositPeriod:9,Ratio:100,PaybackPeriod:18,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:10,Ratio:100,PaybackPeriod:18,InterestRate:15,PaybackType:Installment},
    {DepositPeriod:3,Ratio:100,PaybackPeriod:27,InterestRate:23,PaybackType:Installment},
    {DepositPeriod:4,Ratio:100,PaybackPeriod:36,InterestRate:23,PaybackType:Installment},
    {DepositPeriod:5,Ratio:100,PaybackPeriod:45,InterestRate:23,PaybackType:Installment},
    {DepositPeriod:6,Ratio:100,PaybackPeriod:48,InterestRate:23,PaybackType:Installment},
    {DepositPeriod:7,Ratio:100,PaybackPeriod:60,InterestRate:23,PaybackType:Installment},

]

const Sana:Tarh = {
    Name:TarhName.SN,
    CustomerType:[CustomerType.Real,CustomerType.Legal_Personel],
    MinLoan:100_000_000,
    MaxLoan : Max_Amount.Real_Max,
    Rows:TarhRows,
    DepositePeriod:[2,3,4,5,6,7,8,9,10]
}

export default Sana