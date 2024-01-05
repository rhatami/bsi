import {Row,Payback_Type,Tarh , Max_Amount , TarhName , CustomerType} from "../components/Types";

const Installment = Payback_Type.Installment;
const InterestR = 4;

const TarhRows:Row[] = [
    {DepositPeriod:2,Ratio:90,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:2,Ratio:54,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:2,Ratio:36,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:2,Ratio:27,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:2,Ratio:18,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:2,Ratio:12,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},

    {DepositPeriod:3,Ratio:135,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:3,Ratio:81,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:3,Ratio:54,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:3,Ratio:40,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:3,Ratio:27,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:3,Ratio:18,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},

    {DepositPeriod:4,Ratio:180,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:4,Ratio:108,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:4,Ratio:72,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:4,Ratio:54,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:4,Ratio:36,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:4,Ratio:24,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},

    {DepositPeriod:5,Ratio:225,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:5,Ratio:135,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:5,Ratio:90,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:5,Ratio:67,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:5,Ratio:45,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:5,Ratio:30,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},

    {DepositPeriod:6,Ratio:270,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:6,Ratio:162,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:6,Ratio:108,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:6,Ratio:81,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:6,Ratio:54,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:6,Ratio:36,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},

    {DepositPeriod:7,Ratio:315,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:7,Ratio:189,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:7,Ratio:126,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:7,Ratio:94,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:7,Ratio:63,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:7,Ratio:42,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},

    {DepositPeriod:8,Ratio:360,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:8,Ratio:216,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:8,Ratio:144,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:8,Ratio:108,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:8,Ratio:72,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:8,Ratio:48,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},

    {DepositPeriod:9,Ratio:405,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:9,Ratio:243,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:9,Ratio:162,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:9,Ratio:121,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:9,Ratio:81,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:9,Ratio:54,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},

    {DepositPeriod:10,Ratio:450,PaybackPeriod:4,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:10,Ratio:270,PaybackPeriod:8,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:10,Ratio:180,PaybackPeriod:12,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:10,Ratio:135,PaybackPeriod:16,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:10,Ratio:90,PaybackPeriod:24,InterestRate:InterestR,PaybackType:Installment},
    {DepositPeriod:10,Ratio:60,PaybackPeriod:36,InterestRate:InterestR,PaybackType:Installment},
]

const Gharzolhasane_Sepas:Tarh = {
    Name:TarhName.GSP,
    CustomerType:[CustomerType.Real,CustomerType.Legal_Personel],
    MinLoan:100_000_000,
    MaxLoan : Max_Amount.Real_Max,
    Rows:TarhRows,
    DepositeRange:[2,3,4,5,6,7,8,9,10]
}

export default Gharzolhasane_Sepas