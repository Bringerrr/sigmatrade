import React, { useRef, useEffect, useState } from 'react'
import { Row, Col, Icon, Menu, Dropdown } from 'antd'
import { NavLink } from 'react-router-dom'

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

  const handleClick = (e) => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  return (
    <div className="MainHeader">
      <div className="MainHeader_Upper">
        <Row
          style={{ height: '100%', position: 'relative' }}
          type="flex"
          justify="space-around"
          align="middle"
        >
          <Col span={3}>
            <h3 className="MainHeader_Logo __Huge">
              Сигма Трейд <span className="Logo_Add">24</span>
            </h3>
            <h3 className="MainHeader_Logo __Small">
              СТ <span className="Logo_Add">24</span>
            </h3>
          </Col>
          <Col offset={1} span={8}>
            <span className="MainHeader_YourManager">
              <Icon style={{ fontSize: '20px' }} type="user" />
              Ваш менеджер: <span className="YouManager_Name">Бабушкис Дмитрий</span>
            </span>
          </Col>
          <Col style={{ height: '45px' }} span={12}>
            <Menu
              className="MainHeader_Upper_Right"
              onClick={handleClick}
              selectedKeys={[currentMenu]}
              mode="horizontal"
            >
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    <Icon style={{ fontSize: '25px', color: 'white' }} type="user" />
                    Александр{' '}
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
                Мои заказы{' '}
              </Menu.Item>
              <Menu.Item key="app">
                <NavLink to="/user-profile/basket">
                  <Icon
                    style={{ fontSize: '25px', color: 'white' }}
                    type="shopping-cart"
                  />
                  Корзина
                </NavLink>
              </Menu.Item>
              <Menu.Item key="alipay">
                <Icon style={{ fontSize: '25px', color: 'white' }} type="question" />
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
      <div className="MainHeader_Lower">
        <Row type="flex" justify="end" align="middle">
          <Col xs={24} sm={24} md={20} span={20}>
            <Menu
              className="MainHeader_Lower_Menu"
              onClick={handleClick}
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
