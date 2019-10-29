import React from 'react'
import CustomSearchInput from '../../components/CustomSearchInput'
import BusketTable from '../../components/BusketTable'
import { twelve } from '../../assets'
import { NavLink } from 'react-router-dom'

import { Input, Button, Row, Col, Radio, Select } from 'antd'
import './index.scss'

const { Option } = Select

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

const inputs = ['Город доставки', 'Адрес доставки', 'ФИО', 'E-mail']

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout_Header">
        <Row type="flex" justify="space-between" style={{ width: '100%' }}>
          <Col xs={24} sm={14} md={14} lg={14} xl={14}>
            <h1>Оформление заказа </h1>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <CustomSearchInput />
          </Col>
        </Row>
      </div>
      <div className="Checkout_Form">
        <h3>Контактная информация</h3>
        {inputs.map((inputName) => (
          <div className="Form_Input">
            <label>{inputName}</label>
            <Input></Input>
          </div>
        ))}
      </div>
      <div className="Checkout_Form">
        <h3>Доставка</h3>
        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>A</Radio>
          <Radio value={3}>A</Radio>
          <Radio value={4}>A</Radio>
          <Radio value={5}>A</Radio>
          <Radio value={9}>A</Radio>
          <Radio value={8}>A</Radio>
        </Radio.Group>
      </div>
      <div className="Checkout_Form">
        <h3>Оплата</h3>
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Банковский перевод</Radio.Button>
          <Radio.Button value="b">Оплата наличными</Radio.Button>
          <Select defaultValue="1">
            <Option value="1">ООО "Тестовая компания"</Option>
            <Option value="2">ООО "Тестовая компания"</Option>
            <Option value="3">ООО "Тестовая компания"</Option>
          </Select>
        </Radio.Group>
      </div>
      <div className="Busket_Table">
        <BusketTable data={dataTable} />
        <div className="Table_Footer">
          <div className="Input-Container">
            Введите код купона для скидки
            <Input></Input>
            <Button>Применить</Button>
          </div>
          <div className="Footer_Chekout">
            <div className="Checkout_Amount">
              <div className="Amount_Title">
                <span>Итого: </span> <h3>41 280 P</h3>
              </div>

              <NavLink to="/">
                <Button>Оформить заказ</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
