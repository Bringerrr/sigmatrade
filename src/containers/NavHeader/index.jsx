import React from 'react';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';

import './index.scss'

function NavHeader() {
    return (
        <div className="NavHeader">
            <Row type="flex" justify="space-around" align="middle">
                <Col offset={4} span={4}>
                    <h3 className="NavHeader_Logo">
                        Сигма Трейд <span className="Logo_Add">24</span>
                    </h3>
                </Col>
            </Row>
        </div>
    );
}

export default NavHeader;
