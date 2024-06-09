import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Panel = (props) => {
  const { open, toggleDrawer, componentBody, componentFooter, title, width } =
    props;
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{ zIndex: 1000000 }}
      PaperProps={{
        sx: {
          display: "flex",
          flexDirection: "column",
          width: width,
          padding: 0,
          zIndex: 1000000,
        },
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent={"space-between"}
        sx={{ height: "100%" }}
        flexDirection={"column"}
        display={"flex"}
      >
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding={2}
            borderBottom="1px solid #ccc"
          >
            <Typography variant="h6" component="span">
              {title}
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon sx={{ color: "#000", fontSize: "25px" }} />
            </IconButton>
          </Box>
          {componentBody}
        </Box>
        {componentFooter}
      </Grid>
    </Drawer>
  );
};

export default Panel;
