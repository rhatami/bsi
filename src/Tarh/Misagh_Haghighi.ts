import {Row,Payback_Type,Tarh, Max_Amount , TarhName , CustomerType} from "../components/Types";

const Installment = Payback_Type.Installment;
const TarhRows:Row[] = [
    {DepositPeriod:3,Ratio:80,PaybackPeriod:9,InterestRate:15,PaybackType:Installment},
    {DepositPeriod:3,Ratio:90,PaybackPeriod:9,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:4,Ratio:80,PaybackPeriod:12,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:4,Ratio:90,PaybackPeriod:12,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:5,Ratio:80,PaybackPeriod:15,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:5,Ratio:90,PaybackPeriod:15,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:6,Ratio:80,PaybackPeriod:18,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:6,Ratio:90,PaybackPeriod:18,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:7,Ratio:80,PaybackPeriod:21,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:7,Ratio:90,PaybackPeriod:21,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:8,Ratio:80,PaybackPeriod:24,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:8,Ratio:90,PaybackPeriod:24,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:9,Ratio:80,PaybackPeriod:27,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:9,Ratio:90,PaybackPeriod:27,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:10,Ratio:80,PaybackPeriod:30,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:10,Ratio:90,PaybackPeriod:30,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:11,Ratio:80,PaybackPeriod:33,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:11,Ratio:90,PaybackPeriod:33,InterestRate:16,PaybackType:Installment},
    {DepositPeriod:12,Ratio:80,PaybackPeriod:36,InterestRate:14,PaybackType:Installment},
    {DepositPeriod:12,Ratio:90,PaybackPeriod:36,InterestRate:16,PaybackType:Installment},
]

const Misagh_Haghighi:Tarh = {
    Name:TarhName.MS,
    CustomerType:[CustomerType.Real,CustomerType.Legal_Personel],
    MinLoan:80_000_000,
    MaxLoan : Max_Amount.Real_Max,
    Rows:TarhRows,
    DepositePeriod:[3,4,5,6,7,8,9,10,11,12]
}

export default Misagh_Haghighi