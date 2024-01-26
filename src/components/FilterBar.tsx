import { Filter } from "./FilterData";
import { TarhName, TarhNameFa, CustomerType, CustomerTypeFa } from "./Types";
import Stack from "@mui/material/Stack";
import { Divider, FormHelperText, Input, InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

interface Props {
  onSubmit: (filter: Filter) => void;
  Filter: Filter;
}

function FilterBar({ onSubmit, Filter }: Props) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit({
          DepPer: data.DP,
          DepAmo: data.DA,
          CusTyp: data.CT,
          TarhNm: data.TN,
        })
      )}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* Deposite Amount 
      Field
       */}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" required>
          <FormHelperText>میانگین مبلغ سپرده</FormHelperText>
          <Input
            type="number"
            className="DepositAmountField"
            defaultValue={Filter.DepAmo ? Filter.DepAmo : 1000000000}
            {...register("DA", {
              required: true,
              min: {
                value: 100_000_000,
                message: "حداقل مبلغ 100,000,000 ریال",
              },
            })}
            endAdornment={
              <InputAdornment position="start">ريال</InputAdornment>
            }
          />
        </FormControl>
        {/* Deposite Period
       Field 
       */}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <FormHelperText>مدت سپرده</FormHelperText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={Filter.DepPer ? Filter.DepPer : 2}
            label="DepositePeriod"
            {...register("DP")}
          >
            <MenuItem value={2}>2 ماه</MenuItem>
            <MenuItem value={3}>3 ماه</MenuItem>
            <MenuItem value={4}>4 ماه</MenuItem>
            <MenuItem value={5}>5 ماه</MenuItem>
            <MenuItem value={6}>6 ماه</MenuItem>
            <MenuItem value={7}>7 ماه</MenuItem>
            <MenuItem value={8}>8 ماه</MenuItem>
            <MenuItem value={9}>9 ماه</MenuItem>
            <MenuItem value={10}>10 ماه</MenuItem>
            <MenuItem value={11}>11 ماه</MenuItem>
            <MenuItem value={12}>12 ماه</MenuItem>
          </Select>
        </FormControl>
        {/* Customer Type
       Field 
       */}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <FormHelperText>نوع مشتری</FormHelperText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={Filter.CusTyp ? Filter.CusTyp : "Real"}
            label="CustomerType"
            {...register("CT")}
          >
            <MenuItem value={CustomerType.Real}>
              {CustomerTypeFa[CustomerType.Real]}
            </MenuItem>
            <MenuItem value={CustomerType.Business}>
              {CustomerTypeFa[CustomerType.Business]}
            </MenuItem>
            <MenuItem value={CustomerType.Legal}>
              {CustomerTypeFa[CustomerType.Legal]}
            </MenuItem>
            <MenuItem value={CustomerType.Legal_Personel}>
              {CustomerTypeFa[CustomerType.Legal_Personel]}
            </MenuItem>
          </Select>
        </FormControl>
        {/*
       Tarh Name
       Field 
      */}
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <FormHelperText>نوع طرح</FormHelperText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={Filter.TarhNm ? Filter.TarhNm : "All"}
            label="TarhName"
            {...register("TN")}
          >
            <MenuItem value="All">همه طرح ها</MenuItem>
            <MenuItem value={TarhName.SN}>{TarhNameFa.SN}</MenuItem>
            <MenuItem value={TarhName.MS}>{TarhNameFa.MS}</MenuItem>
            <MenuItem value={TarhName.JT}>{TarhNameFa.JT}</MenuItem>
            <MenuItem value={TarhName.GSP}>سپاس</MenuItem>
            <MenuItem value="Divider" disabled={true}>
              _______________
            </MenuItem>
            <MenuItem value={TarhName.SNK}>{TarhNameFa.SNK}</MenuItem>
            <MenuItem value={TarhName.MSH}>{TarhNameFa.MSH}</MenuItem>
            <MenuItem value={TarhName.JTK}>{TarhNameFa.JTK}</MenuItem>
            <MenuItem value={TarhName.TM2}>تیمچه</MenuItem>
            <MenuItem value={TarhName.SBJ}>صبای سپهر 2</MenuItem>
          </Select>
        </FormControl>
        {/* Submit
        Button
        */}
        <Button variant="contained" type="submit">
          فیلتر کردن
        </Button>
      </Stack>
    </form>
  );
}

export default FilterBar;
