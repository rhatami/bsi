import {Row,Payback_Type,Tarh , Max_Amount , TarhName , CustomerType} from "../components/Types";

const Installment = Payback_Type.Installment;

const TarhRows:Row[] = [
    {DepositPeriod:3,Ratio:100,PaybackPeriod:12,InterestRate:19,PaybackType:Installment},
    {DepositPeriod:3,Ratio:100,PaybackPeriod:18,InterestRate:21,PaybackType:Installment},
    {DepositPeriod:6,Ratio:150,PaybackPeriod:12,InterestRate:17,PaybackType:Installment},
    {DepositPeriod:6,Ratio:150,PaybackPeriod:18,InterestRate:20,PaybackType:Installment},
    {DepositPeriod:12,Ratio:200,PaybackPeriod:12,InterestRate:12,PaybackType:Installment},
    {DepositPeriod:12,Ratio:200,PaybackPeriod:24,InterestRate:19,PaybackType:Installment},
]

const Misagh_Hoghughi:Tarh = {
    Name:TarhName.MSH,
    CustomerType:[CustomerType.Legal],
    MinLoan:2_000_000_000,
    MaxLoan : Max_Amount.Unlimited,
    Rows:TarhRows,
    DepositeRange:[3,6,12]

}

export default Misagh_Hoghughi