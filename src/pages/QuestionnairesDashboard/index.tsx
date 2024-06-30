import React from "react";
import { SideBarConst } from "../../constant/SideBarConst";
import "./index.css";
import AdminSidebar from "../../component/AdminSidebar";
import ViewQuestionnaires from "../../component/ViewQuestionnaires";

export default function QuestionnairesDashboard() {
  return (
    <div className="container">
      <AdminSidebar item={SideBarConst} />
      <div className="content">
        <ViewQuestionnaires title="Viewing questionnaires" />
      </div>
    </div>
  );
}
