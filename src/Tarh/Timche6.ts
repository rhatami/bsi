import {Row,Payback_Type,Tarh  , TarhName , CustomerType} from "../components/Types";

const OneTime = Payback_Type.OneTime;

const TarhRows:Row[] = [
    {DepositPeriod:3,Ratio:250,PaybackType:OneTime,PaybackPeriod:6,InterestRate:23},
    {DepositPeriod:9,Ratio:550,PaybackType:OneTime,PaybackPeriod:6,InterestRate:23},
]

const Timche:Tarh = {
    Name:TarhName.TM6,
    CustomerType:[CustomerType.Business,CustomerType.Legal],
    MinLoan:2_500_000_000,
    MaxLoan : 30_000_000_000,
    Rows:TarhRows,
    DepositePeriod:[3,9]
}

export default Timche
