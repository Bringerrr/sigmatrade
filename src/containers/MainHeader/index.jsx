import React , { useRef, useEffect } from 'react';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';

import './index.scss'

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" disabled>
        3rd menu item（disabled）
      </Menu.Item>
    </Menu>
  );

const lowerMenuItems = ['Встраиваемая техника', 'Крупная бытовая техника', 'Мелка бытовая техника', "Посуда и аксессуары для кухни", "Техника для дома", "Мантехника для кухни", "Запасные части" ]

function MainHeader() {

    return (
        <div className="MainHeader">
          <div className="MainHeader_Upper">
            <Row type="flex" justify="space-around" align="middle">
                <Col span={4}>
                    <h3 className="MainHeader_Logo">
                        Сигма Трейд <span className="Logo_Add">24</span>
                    </h3>
                </Col>
                <Col span={8}>
                    <span className="MainHeader_YourManager">
                      <Icon style={{fontSize: '20px'}} type="user" />Ваш менеджер: <span className="YouManager_Name">Бабушкис Дмитрий</span>
                    </span>
                </Col>
                <Col span={12}>
                    <div className="MainHeader_Info">
                     <div>
                         <Icon style={{fontSize: '20px', color:'white'}} type="user" />
                         <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                            Александр <Icon type="down" />
                            </a>
                        </Dropdown>
                        </div>
                     <div>Мои заказы</div>
                     <div>Корзина</div>
                     <div><Icon style={{fontSize: '20px', color:'white'}} type="question" /></div>
                    </div>
                </Col>
            </Row>
           </div>
           <div className="MainHeader_Lower">
           <Row type="flex" justify="space-around" align="middle">
                <Col offset={4} span={20}>
                  {lowerMenuItems.map((item)=>(<a>{item}</a>))}
                </Col>
            </Row>

           </div>
        </div>
    );
}

export default MainHeader;
