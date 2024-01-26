export enum TarhName{
    JT="JT",
    JTK="JTK",
    MS="MS",
    MSH="MSH",
    SN="SN",
    SNK="SNK",
    GSP="GSP",
    MSP="MSP",
    SBJ="SBJ",
    SBK="SBK",
    TM2="TM2",
    TM3="TM3",
    TM4="TM4",
    TM6="TM6",
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
    [TarhName.MSP]: "مرابحه سپاس",
    [TarhName.SBJ]: "صبای سپهر 2 (جاری)",
    [TarhName.SBK]: "صبای سپهر 2 (کوتاه مدت)",
    [TarhName.TM2]: "تیمچه 2",
    [TarhName.TM3]: "تیمچه 3",
    [TarhName.TM4]: "تیمچه 4",
    [TarhName.TM6]: "تیمچه 6",
}

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
    Real_Max = 5_075_000_000,
    Max = 50_000_000_000
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
