import React, { useRef, useEffect, useState } from 'react'
import { Row, Col, Icon, Menu, Dropdown } from 'antd'
import { NavLink } from 'react-router-dom'
import { setSidebar } from '../../store/ui/ui.actions'
import { connect } from 'react-redux'

import './index.scss'

const { SubMenu } = Menu

const lowerMenuItems = [
  'Встраиваемая техника',
  'Крупная бытовая техника',
  'Мелкая бытовая техника',
  'Посуда и аксессуары для кухни',
  'Техника для дома',
  'Сантехника для кухни',
  'Запасные части'
]

function MainHeader() {
  const [currentMenu, setCurentMenu] = useState()

  return (
    <div className="MainHeader">
      <div className="MainHeader_Upper">
        <Row
          style={{ height: '100%', position: 'relative' }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Col xs={4} sm={4} md={2}>
            <h3 className="MainHeader_Logo __Huge">
              Сигма Трейд <span className="Logo_Add">24</span>
            </h3>
            <h3 className="MainHeader_Logo __Small">
              СТ <span className="Logo_Add">24</span>
            </h3>
          </Col>
          <Col offset={1} xs={0} sm={0} md={9} span={9}>
            <span className="MainHeader_YourManager">
              <Icon style={{ fontSize: '20px' }} type="user" />
              Ваш менеджер: <span className="YouManager_Name">Бабушкис Дмитрий</span>
            </span>
          </Col>
          <Col style={{ height: '100%' }} sm={20} md={12}>
            <Menu
              className="MainHeader_Upper_Right"
              selectedKeys={[currentMenu]}
              mode="horizontal"
            >
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon style={{ fontSize: '25px', color: 'white' }} type="user" />
                    <span className="Menu_Item-Text">Александр</span>
                    <Icon style={{ fontSize: '8px', color: 'white' }} type="down" />
                  </span>
                }
              >
                <Menu.Item key="setting:1">Профиль</Menu.Item>
                <Menu.Item key="setting:4">Выйти</Menu.Item>
              </SubMenu>
              <Menu.Item key="mail">
                <Icon
                  style={{ fontSize: '25px', color: 'white' }}
                  type="unordered-list"
                />
                <span className="Menu_Item-Text">Мои заказы</span>
              </Menu.Item>
              <Menu.Item key="app">
                <NavLink className="Busket_Container" to="/user-profile/basket">
                  <Icon
                    style={{ fontSize: '25px', color: 'white' }}
                    type="shopping-cart"
                  />
                  <span className="Menu_Item-Text __Busket">
                    <span className="title">Корзина</span>
                  </span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="alipay">
                <Icon style={{ fontSize: '25px', color: 'white' }} type="question" />
                <span style={{ opacity: 0, width: '0px' }}>w</span>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
      <div className="MainHeader_Lower">
        <Row type="flex" justify="end" align="middle">
          <Col xs={24} sm={24} md={21} span={21}>
            <Menu
              className="MainHeader_Lower_Menu"
              selectedKeys={[currentMenu]}
              mode="horizontal"
            >
              {lowerMenuItems.map((item) => (
                <Menu.Item>{item}</Menu.Item>
              ))}
            </Menu>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MainHeader
