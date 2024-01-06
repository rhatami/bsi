import { AppBar, Box } from "@mui/material";

interface Props {
  pageSize: string;
}

function Header({ pageSize }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        {pageSize == "sm" ? (
          <p className="HeaderTitle">طرح های تسهیلاتی بانک صادرات</p>
        ) : (
          <p className="HeaderTitle">
            محاسبه طرح های تسهیلاتی بانک صادرات ایران
          </p>
        )}
      </AppBar>
    </Box>
  );
}

export default Header;
