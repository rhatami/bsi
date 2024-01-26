import { FilterData, Filter, DataRow } from "./components/FilterData";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import Footer from "./components/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function App() {
  const [filter, setFilter] = useState<Filter>({} as Filter);
  const [data, setData] = useState<DataRow[]>([]);
  const theme = useTheme();
  const pageSize = useMediaQuery(theme.breakpoints.up("md"))
    ? "lg"
    : useMediaQuery(theme.breakpoints.up("sm"))
    ? "md"
    : "sm";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid id="Header" className="HeaderGrid" xs={12}>
          <Header pageSize={pageSize} />
        </Grid>
        <Grid id="Filter" className="FilterBarGrid" xs={12}>
          <Paper elevation={5} square={false} className="FilterBarPaper">
            <FilterBar
              Filter={filter}
              onSubmit={(filter) => {
                setFilter(filter);
                setData(FilterData(filter));
              }}
            />
          </Paper>
        </Grid>
        <Grid xs={12} id="Main">
          <Paper elevation={5} square={false} className="DataTableGrid">
            {pageSize === "sm" && (
              <div key="rotation-message" className="rotationMessageDiv">
                برای نمایش اطلاعات بیشتر ، لطفا گوشی خود را به حالت افقی
                بچرخانید.
              </div>
            )}
            <DataTable Data={data} pageSize={pageSize} />
          </Paper>
        </Grid>
        <Grid xs={12} id="Footer">
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
