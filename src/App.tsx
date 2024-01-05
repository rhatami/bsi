import { FilterData, Filter, DataRow } from "./components/FilterData";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [filter, setFilter] = useState<Filter>({} as Filter);
  const [data, setData] = useState<DataRow[]>([]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid id="Header" className="HeaderGrid" xs={12}>
          <Header />
        </Grid>
        <Grid className="FilterBarGrid" xs={12}>
          <Paper elevation={5} square={false}>
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
            <DataTable Data={data} />
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
