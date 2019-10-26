import React from 'react';
import LeftSidebar from '../../components/LeftSidebar'
import BuiltIn from '../BuiltIn'
import { Breadcrumb, Alert, Row, Col } from 'antd';
import { Route, NavLink} from 'react-router-dom';

import './index.scss'

const Links = [
  { label: 'Главная', to: '/' },
  { label: "Каталог продукции", to: '/catalog' },
  { label: "Встраиваемая техника", to:'/catalog/built-in-appliances'},
  { label: "Вытяжки", to: "/catalog/built-in-appliances/range-hoods"},
  { label: "Встраиваемые", to:"/catalog/built-in-appliances/range-hoods/built-in"}]

const { Item } = Breadcrumb;

function CatalogDisplay() {
  return (
    <div className="CatalogDisplay">
     <Row>
                <Col span={3}>
                  <LeftSidebar />
                </Col>
                <Col offset={1} span={20}>
                  <Breadcrumb>
                    {Links.map((link) => (
                      <Item><NavLink
                        to={link.to}
                        activeStyle={{
                          fontWeight: "bolder",
                        }}
                      >
                        {link.label}
                      </NavLink></Item>
                    ))}
          </Breadcrumb>
          <div>
        <Route exact path="/" component={BuiltIn} />
        {/* <Route path="/:filter" component={CatalogDisplay1} /> */}
      </div>
        </Col>
        
      </Row>
    </div>
  );
}

export default CatalogDisplay;
