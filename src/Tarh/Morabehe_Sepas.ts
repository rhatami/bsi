import {Row,Payback_Type,Tarh  , TarhName , CustomerType} from "../components/Types";

const Installment = Payback_Type.Installment;

const TarhRows:Row[] = [
    {DepositPeriod:2,Ratio:70,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:2,Ratio:42,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:2,Ratio:28,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:3,Ratio:105,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:3,Ratio:63,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:3,Ratio:42,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:4,Ratio:140,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:4,Ratio:84,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:4,Ratio:56,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:5,Ratio:175,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:5,Ratio:105,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:5,Ratio:70,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:6,Ratio:210,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:6,Ratio:126,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:6,Ratio:84,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:7,Ratio:245,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:7,Ratio:147,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:7,Ratio:98,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:8,Ratio:280,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:8,Ratio:168,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:8,Ratio:112,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:9,Ratio:315,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:9,Ratio:189,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:9,Ratio:126,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:10,Ratio:350,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:10,Ratio:210,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:10,Ratio:140,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:11,Ratio:385,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:11,Ratio:231,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:11,Ratio:154,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:12,Ratio:420,PaybackPeriod:4,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:12,Ratio:252,PaybackPeriod:8,InterestRate:4,PaybackType:Installment},
    {DepositPeriod:12,Ratio:168,PaybackPeriod:12,InterestRate:4,PaybackType:Installment},
]

const Morabahe_Sepas:Tarh = {
    Name:TarhName.MSP,
    CustomerType:[CustomerType.Real,CustomerType.Business,CustomerType.Legal_Personel],
    MinLoan:100_000_000,
    MaxLoan : 10_000_000_000,
    Rows:TarhRows,
    DepositeRange:[2,3,4,5,6,7,8,9,10,11,12]

}

export default Morabahe_Sepas