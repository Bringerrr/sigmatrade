import React from 'react'
import { Row, Col } from 'antd'
import CustomSearchInput from '../../components/CustomSearchInput'
import { NavLink } from 'react-router-dom'

import './index.scss'

const CatalogData = [
  {
    title: 'Встраиваемая техника',
    items: [
      'Вытяжки',
      'Духовые шкафы',
      'Варочные поверхности',
      'Посудомоечные машины',
      'Микроволновые печи',
      'Холодильник',
      'Стиральные машины',
      'Аксессуары'
    ]
  },
  {
    title: 'Крупная бытовая техника',
    items: [
      'Плиты',
      'Посудомоечные машины',
      'Стиральные и сушильные машины',
      'Холодильники и морозильные камеры'
    ]
  },
  {
    title: 'Мелкая бытовая техника',
    items: [
      'Аэрофритюрницы',
      'Блендеры',
      'Блинницы',
      'Вафельницы',
      'Ветчинницы',
      'Измельчители',
      'Йогуртницы'
    ]
  },
  {
    title: 'Посуда и аксессуары для кухни',
    items: [
      'Кастрюли',
      'Ковши',
      'Ножи',
      'Разделочные доски',
      'Сковороды',
      'Столовые приборы',
      'Хлебницы',
      'Чайники(не электрические)',
      'Аксессуары'
    ]
  },
  {
    title: 'Техника для дома',
    items: [
      'Климатическая техника',
      'Уход за одеждой',
      'Красота и здоровье',
      'Аксессeсуары'
    ]
  },
  {
    title: 'Сантехника для кухни',
    items: ['Мойки', 'Смесители', 'Аксессуары']
  },
  {
    title: 'Запасные части',
    items: [
      'Для вытяжек',
      'Для духовых шкафов',
      'Для варочных поверхностей',
      'Для посудомоечных машин'
    ]
  }
]

function Catalog() {
  return (
    <div className="Catalog">
      <h1>Каталог продукции </h1>
      <Row className="Catalog_LowerHeader" type="flex" justify="space-between">
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <CustomSearchInput />
        </Col>
        <Col xs={24} sm={12} md={14} lg={14} xl={14}>
          <Row type="flex">
            <div className="Catalog_Button"> Скидки</div>
            <div className="Catalog_Button"> Акции</div>
            <div className="Catalog_Button"> Уценки</div>
          </Row>{' '}
        </Col>
      </Row>
      <Row type="flex" align="top" gutter={[8, 8]}>
        {CatalogData.map((kindOfProduction) => (
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <ul style={{ marginBottom: '80px' }}>
              <h3>{kindOfProduction.title}</h3>
              {kindOfProduction.items.map((item) => (
                <li>
                  <NavLink to="/catalog/built-in-appliances">{item}</NavLink>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Catalog
