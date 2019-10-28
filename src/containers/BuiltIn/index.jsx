import React, { useState } from 'react'
import { Row, Col, Input, Button, Menu, Dropdown, Icon, Checkbox } from 'antd'
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
        <Row type="flex" justify="space-between" style={{ width: '100%' }}>
          <Col xs={24} sm={14} md={14} lg={14} xl={14}>
            <h1>Встраиваемые вытяжки </h1>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <CustomSearchInput />
          </Col>
        </Row>
      </div>
      <div className="BuiltIn_LowerHeader">
        <div>
          <span> Сортировать: </span>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link">
              {menuItem} <Icon type="down" />
            </a>
          </Dropdown>
          <Checkbox style={{ marginLeft: '20px' }}>В наличии</Checkbox>
        </div>
        <div className="LowerHeader_Icons">
          <Icon
            style={{ color: '#8e3a88', fontSize: '30px', marginRight: '20px' }}
            type="table"
          />
          <Icon style={{ fontSize: '30px' }} type="unordered-list" />
        </div>
      </div>
      <Row>
        <Col span={18}>
          <Row gutter={[8, 8]} type="flex" justify="space-between">
            {products.map((product) => (
              <Col
                style={{ marginBottom: '60px' }}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={6}
              >
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
