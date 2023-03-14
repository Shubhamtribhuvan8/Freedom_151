import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import context from "../MyContext/Context";
import { useContext } from "react";
export default function Homenav() {
  const { isLoggedIn,setIsLoggedIn } = useContext(context)
function appBarLabel(label) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <img
          src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f1ee-1f1f3.svg"
          width="60px"
        />
      </IconButton>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <h3>Freedom 151 </h3>
      </IconButton>
      <Box
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          gap: { xs: 2, sm: 5 },
          p: { xs: 2, sm: 1 },
          m: { xs: 2, sm: 1 },
          justifyContent: { xs: "space-between", sm: "initial" },
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, gap: 5 }}
        >
          <Button variant="outlined" size="large" color="info" sx={{ mr: { xs: 1, sm: 2 }}}>
            <Link to="/admin" style={{textDecoration:"none"}}>Admin section</Link>
          </Button>
          {"  "}
          <Button variant="outlined" size="large" color="info" >
            <Link to="/user" style={{textDecoration:"none"}}>User section </Link>
          </Button>
          {"  "}
           {
            isLoggedIn && (
            <Button onClick={(e)=>{setIsLoggedIn(false)}} variant="outlined" size="large" > Logout </Button>
            )}
        </Typography>
      </Box>
    </Toolbar>
  );
}
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        {appBarLabel()}
      
      </AppBar>
    </Stack>
  );
}
