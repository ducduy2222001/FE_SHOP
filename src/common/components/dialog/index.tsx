import React, { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
interface DialogProps {
  children: ReactNode;
}

export const DiaLogCustom = ({ children }: DialogProps) => {
  return (
    <>
      <Dialog open={true}>{children}</Dialog>
    </>
  );
};
