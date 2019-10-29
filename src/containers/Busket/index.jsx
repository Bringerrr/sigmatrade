import React from 'react'
import CustomSearchInput from '../../components/CustomSearchInput'
import BusketTable from '../../components/BusketTable'
import { twelve } from '../../assets'
import { NavLink } from 'react-router-dom'

import { Input, Button, Row, Col } from 'antd'
import './index.scss'

console.log('Busket', twelve)

const dataTable = [
  {
    key: 1,
    products: {
      name: 'Jessica slim 600 white push button',
      type: 'Вытяжка кухонная',
      quantity: 'в наличии',
      img: twelve
    },
    price: '6 880 P',
    count: 2,
    amount: '13 760 P'
  },
  {
    key: 2,
    products: {
      name: 'Jessica slim 600 white push button',
      type: 'Вытяжка кухонная',
      quantity: 'в наличии',
      img: twelve
    },
    price: '6 880 P',
    count: 2,
    amount: '13 760 P'
  },
  {
    key: 3,
    products: {
      name: 'Jessica slim 600 white push button',
      type: 'Вытяжка кухонная',
      quantity: 'в наличии',
      img: twelve
    },
    price: '6 880 P',
    count: 2,
    amount: '13 760 P'
  }
]

function Busket() {
  return (
    <div className="Busket">
      <div className="Busket_Header">
        <Row type="flex" justify="space-between" style={{ width: '100%' }}>
          <Col xs={24} sm={14} md={14} lg={14} xl={14}>
            <h1>Корзина </h1>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <CustomSearchInput />
          </Col>
        </Row>
      </div>
      <div className="Busket_Table">
        <BusketTable data={dataTable} />
        <div className="Table_Footer">
          <div className="Input-Container">
            <div className="Input-Wrapper">
              <h3>Введите код купона для скидки</h3>
              <Input className="Input"></Input>
            </div>

            <Button className="Input-Button">Применить</Button>
          </div>
          <div className="Footer_Chekout">
            <div className="Checkout_Amount">
              <div className="Amount_Title">
                <span>Итого: </span> <b>41 280 P</b>
              </div>

              <NavLink to="/user-profile/basket/checkout">
                <Button className="Amount_Button">Оформить заказ</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Busket
