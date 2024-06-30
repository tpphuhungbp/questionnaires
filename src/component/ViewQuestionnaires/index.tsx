import React from "react";
import "./index.css";
import { Button, Stack } from "@mui/material";
import { AddCircleOutlined, ContentCopy, DeleteForeverOutlined, Edit } from "@mui/icons-material";
import { CRUDButton, CRUDButtonProps } from "./CRUDButton";
import CustomeSimpleTable from "../CustomSimpleTable";
import { Questionnarie } from "../../interface/questionnarie";
import { questionnaries } from "../../mock/Questionnaries";

interface Props {
  title: string;
}

const ViewQuestionnaires = ({ title }: Props) => {
  const modalObjectName = "questionnaire";

  const buttons: CRUDButtonProps[] = [
    {
      title: "new",
      icon: <AddCircleOutlined />,
      isPrimary: true,
    },
    {
      title: "delete",
      icon: <DeleteForeverOutlined />,
      isPrimary: false,
    },
    {
      title: "edit",
      icon: <Edit />,
      isPrimary: false,
    },
    {
      title: "clone",
      icon: <ContentCopy />,
      isPrimary: false,
    },
  ].map((button) => ({
    ...button,
    title: `${button.title} ${modalObjectName}`.toLocaleUpperCase(),
  }));

  return (
    <div className="modal">
      <div className="header">
        <h3>{title}</h3>
      </div>
      <div className="toolBar">
        {buttons.map((button, index) => (
          <CRUDButton key={index} {...button} />
        ))}
      </div>
      <CustomeSimpleTable<Questionnarie> data={questionnaries} />
    </div>
  );
};

export default ViewQuestionnaires;
