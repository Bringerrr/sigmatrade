import React from 'react'
import { Row, Col } from 'antd'
import ProductPreviewBlock from '../../components/ProductPreview'
import {
  rangeHood,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fivteen
} from '../../assets/index.js'

import './index.scss'

const HoodsPreview = [
  { title: 'Безупречно тихие', img: one },
  { title: 'Встраиваемые полностью', img: two },
  { title: 'Встраиваемые с телескопической  передней панелью', img: three },
  { title: 'Островные', img: four },
  { title: 'Подвесные', img: five },
  { title: 'Т-образные', img: six },
  { title: 'Угловые', img: seven },
  { title: 'Модерн ', img: eight },
  { title: 'Купольные', img: nine },
  { title: 'Наклонные', img: ten },
  { title: 'Классические  с деревянным багетом', img: eleven },
  { title: 'Стандартные ', img: twelve },
  { title: 'Неоклассика', img: thirteen },
  { title: 'Со стеклом', img: fourteen },
  { title: 'Аксессуары', img: fivteen }
]

function RangeHood() {
  return (
    <div className="RangeHood">
      <h1> Вытяжки </h1>
      <Row type="flex" style={{ justifyContent: 'stretch' }} gutter={[8, 8]}>
        {HoodsPreview.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
            <ProductPreviewBlock data={item} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default RangeHood
