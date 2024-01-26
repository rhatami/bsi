import {Row,Payback_Type,Tarh  , TarhName , CustomerType} from "../components/Types";

const OneTime = Payback_Type.OneTime;

const TarhRows:Row[] = [
    {DepositPeriod:3,Ratio:250,PaybackType:OneTime,PaybackPeriod:4,InterestRate:23},
    {DepositPeriod:7,Ratio:400,PaybackType:OneTime,PaybackPeriod:4,InterestRate:23},
    {DepositPeriod:11,Ratio:550,PaybackType:OneTime,PaybackPeriod:4,InterestRate:23},
]

const Timche:Tarh = {
    Name:TarhName.TM4,
    CustomerType:[CustomerType.Business,CustomerType.Legal],
    MinLoan:2_500_000_000,
    MaxLoan : 30_000_000_000,
    Rows:TarhRows,
    DepositePeriod:[3,7,11]
}

export default Timche
