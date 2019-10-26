import React, {useState} from "react";
import {Row, Column, Input, Button, Menu, Dropdown, Icon} from "antd";

import "./index.scss";

const {Search} = Input;
const {Item} = Menu;

const menuItems = ["По возрастанию цены", "По убыванию цены", "По популярности"];

function BuiltIn() {
  const [menuItem, setMenuItem] = useState(menuItems[0]);

  const menu = (
    <Menu>
      {menuItems.map((item, index) => (
        <Item onClick={() => setMenuItem(item)} key={index}>
          <a href="#">{item}</a>
        </Item>
      ))}
    </Menu>
  );

  return (
    <div className="BuiltIn">
      <div className="BuiltIn_Header">
        <h1>Встраиваемые вытяжки </h1>
        <div className="BuiltIn_Header__CustomSearchInput">
          <Input style={{width: "200px"}} placeholder="Поиск по каталогу" />
          <Button className="searchButton" type="primary" shape="circle" icon="search" />
        </div>
      </div>
      <div className="BuiltIn_LowerHeader">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link">
            {menuItem} <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default BuiltIn;
