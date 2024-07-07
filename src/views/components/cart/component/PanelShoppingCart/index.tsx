import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ItemCart from "../ItemCart";
import Panel from "../../../../../common/components/panel";

import styles from "./panelShoppingCart.module.scss";
import { ButtonCustom } from "../../../../../common/components/button";

interface PanelProps {
  open: boolean;
  toggleDrawer: (
    open: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const CheckOutAndView = () => {
  const navigate = useNavigate();

  return (
    <Grid
      item
      container
      direction={"column"}
      justifyContent={"space-evenly"}
      className={styles.Panel}
    >
      <Grid item borderBottom="1px solid #ccc" borderTop="1px solid #ccc">
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"10px 20px"}
        >
          <Typography
            variant="h6"
            component="span"
            fontWeight={"600"}
            fontSize={"18px"}
          >
            Total item:
          </Typography>
          <Typography
            variant="h6"
            component="span"
            fontWeight={"600"}
            fontSize={"18px"}
          >
            $100
          </Typography>
        </Box>
      </Grid>
      <Grid container direction="column" gap={2} padding={"0 20px"}>
        <ButtonCustom
          variant="outlined"
          className={styles.btnPanel}
          onClick={() => {
            navigate("/cart");
          }}
          text="VIEW CART"
          style={{
            padding: "10px 30px",
            color: "#78bcc4",
            borderColor: "#78bcc4",
          }}
        />
        <ButtonCustom
          variant="outlined"
          className={styles.btnPanel}
          onClick={() => {
            navigate("/checkout");
          }}
          text="CHECKOUT"
          style={{
            padding: "10px 30px",
            color: "#78bcc4",
            borderColor: "#78bcc4",
          }}
        />
      </Grid>
    </Grid>
  );
};

const ListItemCart = () => {
  return (
    <Box
      padding={2}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      overflow={"auto"}
      className={styles.boxContainer}
    >
      {Array.from(Array(1)).map((_) => (
        <ItemCart />
      ))}
    </Box>
  );
};

export const PanelShoppingCart: React.FC<PanelProps> = ({
  open,
  toggleDrawer,
}) => {
  return (
    <Panel
      open={open}
      width={"600px"}
      toggleDrawer={toggleDrawer}
      title="Shopping Cart"
      componentBody={<ListItemCart />}
      componentFooter={<CheckOutAndView />}
    />
  );
};
