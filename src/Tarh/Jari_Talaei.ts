import {Row,Payback_Type,Tarh, Max_Amount , TarhName , CustomerType} from "../components/Types";

const Installment = Payback_Type.Installment;

const TarhRows:Row[] = [
    {DepositPeriod:3,Ratio:83,PaybackPeriod:12,InterestRate:18,PaybackType:Installment},
    {DepositPeriod:3,Ratio:60,PaybackPeriod:12,InterestRate:13,PaybackType:Installment},
    {DepositPeriod:6,Ratio:122,PaybackPeriod:12,InterestRate:15,PaybackType:Installment},
    {DepositPeriod:6,Ratio:86,PaybackPeriod:12,InterestRate:10,PaybackType:Installment},
    {DepositPeriod:6,Ratio:74,PaybackPeriod:12,InterestRate:7,PaybackType:Installment},
    {DepositPeriod:6,Ratio:67,PaybackPeriod:12,InterestRate:2,PaybackType:Installment},
    {DepositPeriod:9,Ratio:165,PaybackPeriod:12,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:9,Ratio:127,PaybackPeriod:12,InterestRate:10,PaybackType:Installment},
    {DepositPeriod:9,Ratio:100,PaybackPeriod:12,InterestRate:8,PaybackType:Installment},
    {DepositPeriod:9,Ratio:115,PaybackPeriod:24,InterestRate:17,PaybackType:Installment},
    {DepositPeriod:9,Ratio:83,PaybackPeriod:24,InterestRate:13,PaybackType:Installment},
    {DepositPeriod:9,Ratio:70,PaybackPeriod:24,InterestRate:8,PaybackType:Installment},
    {DepositPeriod:12,Ratio:116,PaybackPeriod:36,InterestRate:18,PaybackType:Installment},
    {DepositPeriod:12,Ratio:82,PaybackPeriod:36,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:12,Ratio:67,PaybackPeriod:36,InterestRate:9,PaybackType:Installment},
]

const Jari_Talaei:Tarh = {
    Name:TarhName.JT,
    CustomerType:[CustomerType.Real,CustomerType.Legal_Personel],
    MinLoan:60_000_000,
    MaxLoan : Max_Amount.Real_Max,
    Rows:TarhRows,
    DepositePeriod:[3,6,9,12]
}

export default Jari_Talaei