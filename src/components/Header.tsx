import { AppBar, Box } from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <p className="HeaderTitle">محاسبه طرح های تسهیلاتی بانک صادرات ایران</p>
      </AppBar>
    </Box>
  );
}

export default Header;
