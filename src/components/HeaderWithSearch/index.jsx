import React from 'react'
import { Row, Col } from 'antd'
import CustomSearchInput from '../CustomSearchInput'
import './index.scss'

const HeaderWithSearch = ({ title }) => (
  <Row
    style={{ width: '100%', alignItems: 'flex-end', marginBottom: '60px' }}
    type="flex"
    align="end"
    justify="space-between"
    className="HeaderAndSearch_Container"
  >
    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
      <h1>{title}</h1>
    </Col>
    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
      <CustomSearchInput />
    </Col>
  </Row>
)

export default HeaderWithSearch
