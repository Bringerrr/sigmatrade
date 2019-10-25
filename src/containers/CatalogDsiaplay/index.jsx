import React from 'react';
import LeftSidebar from '../../components/LeftSidebar'
import { Breadcrumb, Alert ,Row, Col} from 'antd';



import './index.scss'


function CatalogDisplay() {
  return (
    <div className="CatalogDisplay">
     <h1>Catalog Display wafawf </h1>
     <Row type="flex" justify="space-around" align="middle">
                <Col span={4}>
                  <LeftSidebar />
                </Col>
                <Col span={8}>
                <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
                </Col>
                <Col span={12} />
            </Row>
    </div>
  );
}

export default CatalogDisplay;
