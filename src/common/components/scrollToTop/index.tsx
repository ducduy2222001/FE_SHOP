import React from "react";
import { IconButton, Theme, useScrollTrigger } from "@mui/material";
import { NorthRounded } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
  position: "fixed",
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  zIndex: 100000,
  background: "var(--color-black)",

  "&:hover": {
    backgroundColor: "var(--color-black)",
  },
}));

const ScrollToTop: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {trigger && (
        <StyledIconButton
          onClick={scrollToTop}
          color="primary"
          aria-label="scroll to top"
        >
          <IconButton
            children={
              <NorthRounded
                sx={{ fontSize: "30px", color: "var(--color-white)" }}
              />
            }
            disableRipple={true}
            size="medium"
            color="success"
          />
        </StyledIconButton>
      )}
    </>
  );
};

export default ScrollToTop;
