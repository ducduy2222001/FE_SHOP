import { CloseCircleOutlined } from "@ant-design/icons";
import { Box, Drawer, IconButton, Typography } from "@mui/material";

const Panel = (props) => {
  const { open, toggleDrawer, component, title, width } = props;
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
          <CloseCircleOutlined />
        </IconButton>
      </Box>
      <Box flex="1" padding={2}>
        {component}
      </Box>
    </Drawer>
  );
};

export default Panel;
