import { AppBar, Box } from "@mui/material";

interface Props {
  pageSize: string;
}

function Header({ pageSize }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {pageSize == "lg" ? (
          <p className="HeaderTitle">
            محاسبه طرح های تسهیلاتی بانک صادرات ایران
          </p>
        ) : (
          <p className="HeaderTitle">طرح های تسهیلاتی بانک صادرات</p>
        )}
      </AppBar>
    </Box>
  );
}

export default Header;
