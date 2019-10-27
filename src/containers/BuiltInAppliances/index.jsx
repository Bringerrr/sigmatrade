import React from 'react'
import { Row, Col } from 'antd'
import ProductPreviewBlock from '../../components/ProductPreview'
import { one, two, three, four, five, six, seven, eight } from '../../assets/builtIn'

import './index.scss'

const HoodsPreview = [
  { title: 'Встраиваемые', img: one },
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
      <h1> Встраиваемаяя техника </h1>
      <Row gutter={[8, 8]}>
        {HoodsPreview.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <ProductPreviewBlock data={item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default BuiltInAppliances
