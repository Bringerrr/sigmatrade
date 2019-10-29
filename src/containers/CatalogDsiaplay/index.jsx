import React from 'react'
import LeftSidebar from '../../components/LeftSidebar'
import BuiltIn from '../BuiltIn'
import RangeHood from '../RangeHood'
import Catalog from '../Catalog'
import BuiltInAppliances from '../BuiltInAppliances'
import ProductCard from '../ProductCard'
import Busket from '../Busket'
import { Breadcrumb, Alert, Row, Col } from 'antd'
import { Route, Switch, NavLink, withRouter } from 'react-router-dom'

import { domed } from '../../assets'
import './index.scss'

const Links = [
  { label: 'Главная', to: '/' },
  { label: 'Каталог продукции', to: '/catalog' },
  { label: 'Встраиваемая техника', to: '/catalog/built-in-appliances' },
  { label: 'Вытяжки', to: '/catalog/built-in-appliances/range-hoods' },
  { label: 'Встраиваемые', to: '/catalog/built-in-appliances/range-hoods/built-in' },

  // { label: 'Купольные', to: '/catalog/built-in-appliances/range-hoods/domed' }
  {
    label: 'Купольные',
    to: '/catalog/built-in-appliances/range-hoods/domed/random'
  }
]

const { Item } = Breadcrumb

const breadcrumbNameMap = {
  '/catalog': 'Каталог продукции',
  '/catalog/built-in-appliances': 'Встраиваемая техника',
  '/catalog/built-in-appliances/range-hoods': 'Вытяжки',
  '/catalog/built-in-appliances/range-hoods/built-in': 'Встраиваемые',
  '/catalog/built-in-appliances/range-hoods/domed': 'Купольные',
  '/user-profile': 'Персональный раздел',
  '/user-profile/basket': 'Корзина',
  '/user-profile/basket/checkout': 'Корзина'
}

const dropdownItems = [
  {
    id: 1,
    title: 'Описание',
    description:
      'Libra - новая модель встраиваемого типа в ассортименте бренда Shindo. Вытяжка компактная-представлена в двух размерах: 50 и 60 см. Данная модель не только идеально подойдет любому интерьеру кухни, но и имеет достойные характеристики: производительность 420 м³/ч и низкий уровень шума в 38 дБ.'
  },
  { id: 2, title: ' Общие характеристики', description: '' },
  { id: 3, title: 'Технические характеристики', description: '' },
  { id: 4, title: 'Размер', description: '' }
]

const defaultCardData = {
  title: 'KRONAsteel JANNA 600 INOX',
  type: 'Вытяжка кухонная',
  price: '5055 руб.',
  quantity: 'в наличии',
  markup: '0%',
  margin: '2300 руб.',
  priceWithMarkup: '7358 руб.',
  img: domed,
  dropdownItems
}

const CatalogDisplay = ({ location: { pathname } }) => {
  const pathSnippets = pathname.split('/').filter((i) => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <NavLink to={url}>{breadcrumbNameMap[url]}</NavLink>
      </Breadcrumb.Item>
    )
  })
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <NavLink to="/">Главная</NavLink>
    </Breadcrumb.Item>
  ].concat(extraBreadcrumbItems)

  return (
    <div className="CatalogDisplay">
      <Row gutter={[8, 8]}>
        <Col xs={0} sm={0} md={3}>
          <LeftSidebar />
        </Col>
        <Col style={{ marginTop: '24px' }} xs={24} sm={24} md={21}>
          <Breadcrumb style={{ marginBottom: '15px' }}>
            {/* {breadcrumbItems} */}
            {Links.map((link) => (
              <Breadcrumb.Item key="home">
                <NavLink to={link.to}>{link.label}</NavLink>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div>
            <Switch>
              <Route exact path="/" component={BuiltIn} />

              <Route exact path="/catalog" component={Catalog} />

              <Route
                exact
                path="/catalog/built-in-appliances"
                component={BuiltInAppliances}
              />

              <Route
                exact
                path="/catalog/built-in-appliances/range-hoods"
                component={RangeHood}
              />

              <Route
                exact
                component={BuiltIn}
                path="/catalog/built-in-appliances/range-hoods/built-in"
              />

              <Route
                exact
                render={(props) => <ProductCard data={defaultCardData} />}
                path="/catalog/built-in-appliances/range-hoods/domed/:id"
              />

              <Route
                exact
                component={BuiltIn}
                path="/catalog/built-in-appliances/range-hoods/domed"
              />

              <Route exact component={Busket} path="/user-profile/basket" />

              <Route
                exact
                component={BuiltIn}
                path="/user-profile/basket/checkout"
              />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(CatalogDisplay)
