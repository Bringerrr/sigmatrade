import React, { useState } from 'react'
import { Row, Col, Input, Button, Menu, Dropdown, Icon } from 'antd'
import rangeHood from '../../assets/rangeHood.webp' // Tell Webpack this JS file uses this image
import Product from '../../components/Product'
import ProductFilter from '../../components/ProductFilter'
import CustomSearchInput from '../../components/CustomSearchInput'
import './index.scss'

const { Search } = Input
const { Item } = Menu

const menuItems = ['По возрастанию цены', 'По убыванию цены', 'По популярности']
const products = [
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'в наличии',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'нет в наличии',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'мало',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'в наличии',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'нет в наличии',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'мало',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'в наличии',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'нет в наличии',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'мало',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'в наличии',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'нет в наличии',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  },
  {
    title: 'KRONAsteel JANNA 600 INOX',
    type: 'Вытяжка кухонная',
    price: '5055 руб.',
    quantity: 'мало',
    markup: '0%',
    margin: '2300 руб.',
    priceWithMarkup: '7358 руб.',
    img: rangeHood
  }
]

console.log(rangeHood) // /rangeHood.84287d09.png
function Header() {
  // Import result is the URL of your image
  return <img src={rangeHood} alt="Logo" />
}

function BuiltIn() {
  const [menuItem, setMenuItem] = useState(menuItems[0])

  const menu = (
    <Menu>
      {menuItems.map((item, index) => (
        <Item onClick={() => setMenuItem(item)} key={index}>
          <a href="#">{item}</a>
        </Item>
      ))}
    </Menu>
  )

  return (
    <div className="BuiltIn">
      <div className="BuiltIn_Header">
        <h1>Встраиваемые вытяжки </h1>
        <CustomSearchInput />
      </div>
      <div className="BuiltIn_LowerHeader">
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link">
            {menuItem} <Icon type="down" />
          </a>
        </Dropdown>
      </div>
      <Row>
        <Col span={18}>
          <Row gutter={[8, 8]} type="flex" justify="space-between">
            {products.map((product) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Product data={product} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col offset={2} span={4}>
          <ProductFilter></ProductFilter>
        </Col>
      </Row>
    </div>
  )
}

export default BuiltIn
