import { Button } from "@mui/material";

export interface CRUDButtonProps {
  title: string;
  icon: React.ReactNode;
  isPrimary: boolean;
  onClick?: () => void;
}
export const CRUDButton = ({ title, icon, isPrimary }: CRUDButtonProps) => {
  return (
    <Button variant={"contained"} startIcon={icon} color={isPrimary ? "primary" : "secondary"}>
      {title}
    </Button>
  );
};
