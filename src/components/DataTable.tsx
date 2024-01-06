import { DataRow } from "./FilterData";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

interface Props {
  Data: DataRow[];
  pageSize: string;
}

const smallColumns: GridColDef[] = [
  {
    field: "TarhName",
    headerName: "نام طرح",
    width: 180,
    headerAlign: "center",
    align: "center",
    cellClassName: "TarhName",
  },
  {
    field: "LoanAmount",
    headerName: "مبلغ تسهیلات",
    type: "number",
    width: 200,
    headerAlign: "center",
    align: "center",
    cellClassName: "LoanAmount",
  },
  {
    field: "InterestRate",
    headerName: "نرخ سود",
    type: "number",
    width: 100,
    headerAlign: "center",
    align: "center",
    cellClassName: "Interest",
  },
  {
    field: "PaybackPeriod",
    headerName: "مدت بازپرداخت",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
    cellClassName: "PaybackPeriod",
  },
];

const LargeColumns: GridColDef[] = [
  {
    field: "TarhName",
    headerName: "نام طرح",
    width: 180,
    headerAlign: "center",
    align: "center",
    cellClassName: "TarhName",
  },
  {
    field: "Ratio",
    headerName: "ضریب تسهیلات",
    width: 150,
    headerAlign: "center",
    align: "center",
    cellClassName: "Ratio",
  },
  {
    field: "DepositPeriod",
    headerName: "مدت سپرده گذاری",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
    cellClassName: "DepositPeriod",
  },
  {
    field: "LoanAmount",
    headerName: "مبلغ تسهیلات",
    type: "number",
    width: 200,
    headerAlign: "center",
    align: "center",
    cellClassName: "LoanAmount",
  },
  {
    field: "InterestRate",
    headerName: "نرخ سود",
    type: "number",
    width: 100,
    headerAlign: "center",
    align: "center",
    cellClassName: "Interest",
  },
  {
    field: "PaybackPeriod",
    headerName: "مدت بازپرداخت",
    type: "number",
    width: 150,
    headerAlign: "center",
    align: "center",
    cellClassName: "PaybackPeriod",
  },
  {
    field: "Installment",
    headerName: "مبلغ هر قسط",
    type: "number",
    width: 180,
    headerAlign: "center",
    align: "center",
    cellClassName: "Installment",
  },
  {
    field: "PaybackType",
    headerName: "نحوه بازپرداخت",
    width: 150,
    headerAlign: "center",
    align: "center",
    cellClassName: "PaybacType",
  },
];

const translate = {
  toolbarExport: " چاپ جدول",
  toolbarExportPrint: "چاپ",
  toolbarExportCSV: "خروجی CSV",
  columnMenuSortAsc: "مرتب سازی صعودی",
  columnMenuSortDesc: "مرتب سازی نزولی",
  columnMenuUnsort: "حذف مرتب سازی",
  NodeFilter: "فیلتر",
  columnMenuFilter: "فیلتر کردن این ستون",
  columnMenuHideColumn: "مخفی کردن این ستون",
  columnMenuManageColumns: "مدیریت ستون ها",
  columnsPanelShowAllButton: "نمایش همه ستون ها",
  columnsPanelHideAllButton: "مخفی کردن همه ستون ها",
  noRowsLabel: "با فیلترهای انتخابی شما طرحی یافت نشد",
  columnHeaderSortIconLabel: "مرتب سازی",
  columnMenuLabel: "منو",
};

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport
        printOptions={{
          hideFooter: true,
          hideToolbar: true,
          hideFooterRowCount: true,
        }}
        csvOptions={{ disableToolbarButton: true }}
      />
    </GridToolbarContainer>
  );
}

const DataTable = ({ Data, pageSize }: Props) => {
  return (
    <div className="DataTableDiv">
      <DataGrid
        rows={Data}
        columns={pageSize == "lg" ? LargeColumns : smallColumns}
        hideFooterPagination={true}
        showCellVerticalBorder
        localeText={translate}
        slots={{ toolbar: CustomToolbar }}
        className="DataTable"
        sx={{
          "@media print": {
            ".MuiDataGrid-main": {
              width: "fit-content",
              height: "fit-content",
              overflow: "visible",
              direction: "rtl",
            },
          },
        }}
      />
    </div>
  );
};

export default DataTable;
