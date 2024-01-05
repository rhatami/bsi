export enum TarhName{
    JT="JT",
    JTK="JTK",
    MS="MS",
    MSH="MSH",
    SN="SN",
    SNK="SNK",
    GSP="GSP",
    MSP="MSP"
}

interface TarhNameDic {
    [index: string]: string;
}

export const TarhNameFa:TarhNameDic={
    [TarhName.JT]: "جاری طلایی 2",
    [TarhName.JTK]: "جاری طلایی کسب و کار",
    [TarhName.MS]: "میثاق 2",
    [TarhName.MSH]: "میثاق حقوقی",
    [TarhName.SN]: "سنا 2",
    [TarhName.SNK]: "سنا کسب و کار",
    [TarhName.GSP]:"قرض الحسنه سپاس",
    [TarhName.MSP]: "مرابحه سپاس"}

export enum CustomerType{
    Real="Real",
    Business="Business",
    Legal="Legal",
    Legal_Personel = "Legal_Personel"
}

interface CustomerTypeDic {
    [index: string]: string;
}

export const  CustomerTypeFa:CustomerTypeDic = {
    [CustomerType.Real]:"حقیقی",
    [CustomerType.Business]:"کسب و کار",
    [CustomerType.Legal]:"حقوقی",
    [CustomerType.Legal_Personel] : "پرسنل حقوقی"
}

export enum Max_Amount{
    Real_Max = 3_000_000_000,
    Unlimited = 1_000_000_000_000_000_000
}

export enum Payback_Type{
    Installment="اقساط ماهیانه",
    OneTime="یکجا"
}

export interface Row{
    DepositPeriod:number;
    Ratio:number;
    InterestRate:number;
    PaybackPeriod:number;
    PaybackType:Payback_Type;
}

export interface Tarh{
    Name:TarhName;
    MinLoan:number;
    MaxLoan:number;
    CustomerType:CustomerType[]
    DepositeRange:number[]
    Rows:Row[];
}
