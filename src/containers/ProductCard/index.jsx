import React, { useRef, useEffect } from 'react'
import { Col, Row, Carousel, Dropdown, Icon } from 'antd'
import CustomCarousel from '../../components/CustomCarousel'
import CustomDropdown from '../../components/CustomDropdown'
import Product from '../../components/Product'

import CustomSearchInput from '../../components/CustomSearchInput'

import { rangeHood } from '../../assets'
import './index.scss'

const colors = {
  price: { true: 'rgba(0, 0, 0, 0.502)', false: 'rgb(0, 0, 0)' },
  quantity: {
    'в наличии': 'rgb(102, 170, 5)',
    'нет в наличии': 'rgba(1, 1, 1, 0.502)',
    мало: 'rgb(240, 158, 1)'
  }
}

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
  }
]

const bonuses = [
  { label: 'бонусов 285', color: '#8e3a88' },
  { label: 'бонусов 285', color: 'black' },
  { label: 'бонусов 285', color: '#1fbc23' }
]

const ProductCard = ({ data }) => {
  const inputEl = useRef(null)
  useEffect(() => {
    console.log(inputEl)
  }, [])
  const {
    title,
    type,
    price,
    quantity,
    markup,
    margin,
    priceWithMarkup,
    img,
    dropdownItems
  } = data
  return (
    <div ref={inputEl} className="ProductCard">
      <Row type="flex" justify="end">
        <Col xs={24} sm={18} md={12} lg={12} xl={8}>
          <CustomSearchInput />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <Row>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <CustomCarousel images={[img, img, img, img, img]} />
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <div className="ProductCard_Bonuses">
                {bonuses.map((bonus) => (
                  <div
                    style={{
                      color: bonus.color,
                      border: `1px solid ${bonus.color}`
                    }}
                    className="Bonuses_Item"
                  >
                    <b>{bonus.label}</b>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div className="ProductCard-Container">
            <h1>{title}</h1>
            <span className="simpleText">{type}</span>
            <b
              style={{
                color:
                  quantity === 'нет в наличии'
                    ? colors.price.true
                    : colors.price.false
              }}
              className="price"
            >
              {price}
            </b>
            <span
              style={{
                color: colors.quantity[quantity]
              }}
              className="quantity"
            >
              {quantity}
            </span>
            <span className="simpleText">
              Наценка: {markup}{' '}
              <a className="changeMarkup" href="#">
                изменить
              </a>
            </span>
            <span className="simpleText __margin"> Маржа: {margin}</span>
            <span className="simpleText"> Цена с наценкой: {priceWithMarkup}</span>
          </div>
          <CustomDropdown data={dropdownItems} />
          <div className="ProductCard__Download">
            <Icon style={{ color: 'red', fontSize: '24px' }} type="file-pdf" />
            <span>Скачать инструкцию к LIBRA 50 W PB вытяжка кухонная</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
          <h1>Сопуствующие товары</h1>
          <Row gutter={[8, 8]} type="flex" justify="space-between">
            {products.map((product) => (
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Product data={product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProductCard
