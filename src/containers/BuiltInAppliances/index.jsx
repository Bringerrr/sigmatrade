import React from 'react'
import { Row, Col } from 'antd'
import ProductPreviewBlock from '../../components/ProductPreview'
import { one, two, three, four, five, six, seven, eight } from '../../assets/builtIn'
import { NavLink } from 'react-router-dom'

import HeaderWithSearch from '../../components/HeaderWithSearch'

import './index.scss'

const HoodsPreview = [
  { title: 'Вытяжки', img: one },
  { title: 'Духовые шкафы', img: two },
  { title: 'Варочные поверхности', img: three },
  { title: 'Посудомоечные шкафы', img: four },
  { title: 'Микроволновые печи', img: five },
  { title: 'Холодильники', img: six },
  { title: 'Стиральные машины', img: seven },
  { title: 'Аксессуары', img: eight }
]

function BuiltInAppliances() {
  return (
    <div className="BuiltInAppliances">
      <HeaderWithSearch title="Встраиваемая техника" />
      <Row gutter={[40, 40]}>
        {HoodsPreview.map((item) => (
          <NavLink to="/catalog/built-in-appliances/range-hoods">
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
              <ProductPreviewBlock data={item} />
            </Col>
          </NavLink>
        ))}
      </Row>
    </div>
  )
}

export default BuiltInAppliances
