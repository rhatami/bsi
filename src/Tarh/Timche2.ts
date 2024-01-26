import {Row,Payback_Type,Tarh  , TarhName , CustomerType} from "../components/Types";

const OneTime = Payback_Type.OneTime;

const TarhRows:Row[] = [
    {DepositPeriod:3,Ratio:250,PaybackType:OneTime,PaybackPeriod:2,InterestRate:23},
    {DepositPeriod:5,Ratio:300,PaybackType:OneTime,PaybackPeriod:2,InterestRate:23},
    {DepositPeriod:7,Ratio:350,PaybackType:OneTime,PaybackPeriod:2,InterestRate:23},
    {DepositPeriod:9,Ratio:400,PaybackType:OneTime,PaybackPeriod:2,InterestRate:23},
    {DepositPeriod:11,Ratio:450,PaybackType:OneTime,PaybackPeriod:2,InterestRate:23},
]

const Timche:Tarh = {
    Name:TarhName.TM2,
    CustomerType:[CustomerType.Business,CustomerType.Legal],
    MinLoan:2_500_000_000,
    MaxLoan : 30_000_000_000,
    Rows:TarhRows,
    DepositeRange:[3,5,7,9,11]
}

export default Timche
