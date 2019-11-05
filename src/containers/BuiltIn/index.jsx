import React, { useState } from 'react'
import {
  Row,
  Col,
  Input,
  Button,
  Menu,
  Dropdown,
  Icon,
  Checkbox,
  Drawer
} from 'antd'
import { NavLink } from 'react-router-dom'
import rangeHood from '../../assets/rangeHood.webp' // Tell Webpack this JS file uses this image
import Product from '../../components/Product'
import ProductFilter from '../../components/ProductFilter'
import HeaderWithSearch from '../../components/HeaderWithSearch'
import { ReactComponent as NineDots } from '../../assets/9dots.svg'
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
  const [drawer, setDrawer] = useState(false)

  const menu = (
    <Menu>
      {menuItems.map((item, index) => (
        <Item
          className="Sort_Dropdown"
          onClick={() => setMenuItem(item)}
          key={index}
        >
          <a href="#">{item}</a>
        </Item>
      ))}
    </Menu>
  )

  const showDrawer = () => {
    setDrawer(true)
  }

  const onClose = () => {
    setDrawer(false)
  }

  return (
    <div className="BuiltIn">
      <div className="BuiltIn_Header">
        <HeaderWithSearch title="Встраиваемые вытяжкки" />
      </div>

      <div className="Navbar-Container __slim">
        <Drawer
          className="Navbar-Drawer"
          title="Сигма Трейд 24"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={drawer}
        >
          <ProductFilter drawer />
        </Drawer>
      </div>
      <div className="BuiltIn_LowerHeader">
        <div className="LowerHeader_Sort">
          <span> Сортировать: </span>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link">
              {menuItem} <Icon type="down" />
            </a>
          </Dropdown>
          <Checkbox className="Sort_Checkbox">В наличии</Checkbox>
        </div>
        <div className="LowerHeader_Icons">
          <NineDots className="NineDots_Icon" />
          <Icon style={{ fontSize: '30px' }} type="unordered-list" />
        </div>
      </div>
      <div>
        <div className="Filter-Container">
          <Button
            onClick={() => {
              setDrawer(true)
            }}
            icon="filter"
            className="Filter_Icon"
          >
            Фильтр
          </Button>
        </div>
      </div>
      <Row type="flex" justify="space-between">
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <Row gutter={[8, 8]} type="flex" justify="space-between">
            {products.map((product) => (
              <Col
                style={{ marginBottom: '60px' }}
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={6}
              >
                <NavLink to="/catalog/built-in-appliances/range-hoods/domed/random">
                  <Product data={product} />
                </NavLink>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={0} sm={0} md={0} lg={4} xl={4} span={4}>
          <ProductFilter />
        </Col>
      </Row>
    </div>
  )
}

export default BuiltIn
