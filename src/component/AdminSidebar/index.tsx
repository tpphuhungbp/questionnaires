import React, { useState } from "react";
import "./index.css";
import { SideBarItem } from "../../interface/common";
import { SideBarTitle } from "../../constant/SideBarConst";

interface Props {
  item: SideBarItem[];
}

const AdminSidebar = ({ item }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setSelected(name);
  };

  return (
    <div className="sidebar">
      <h3>{SideBarTitle.toLocaleUpperCase()}</h3>
      {item.map((item, index) => (
        <div key={index} className="sidebar-section">
          <h3>{item.name}</h3>
          <ul>
            {item.functions.map((func, idx) => (
              <li key={idx}>
                <button
                  className={selected === func.name ? "selected" : ""}
                  onClick={() => handleClick(func.name)}
                >
                  {func.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminSidebar;
