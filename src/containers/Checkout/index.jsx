import React, { useState } from 'react'
import CustomSearchInput from '../../components/CustomSearchInput'
import BusketTable from '../../components/BusketTable'
import { twelve } from '../../assets'

import { ReactComponent as PaymentIcon } from '../../assets/pay-day.svg'
import { NavLink } from 'react-router-dom'

import { Input, Button, Row, Col, Radio, Select, Icon } from 'antd'
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
    amount: '13 760 P',
    bonuses: 216
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
    amount: '13 760 P',
    bonuses: 216
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
    amount: '13 760 P',
    bonuses: 216
  }
]

const inputs = ['Город доставки', 'Адрес доставки', 'ФИО', 'E-mail']
const radio = [
  {
    title: 'Доставка поставщика'
  },
  {
    title: 'Город доставки',
    subtitle:
      'При заказе до 15000 руб. - стоимость доставки 500руб., свыше 15 000 руб. бесплатно'
  },
  {
    title: 'Доставка по МКАД',
    subtitle:
      'При заказе до 15000 руб. - стоимость доставки 500руб., свыше 15 000 руб. бесплатно'
  },
  {
    title: 'Доставка по МО 500 рублей'
  },
  {
    title: 'Москва и МО до 50км от МКАД',
    subtitle:
      'При заказе до 15000 руб. - стоимость доставки 500руб., свыше 15 000 руб. бесплатно'
  },
  {
    title: 'Доставка по МО 800 рублей'
  }
]

const payment = [
  { type: 'Банковский перевод', icon: <Icon type="file-text" /> },
  { type: 'Оплата наличным', icon: <PaymentIcon /> }
]

function Checkout() {
  const [currentPayment, setCurrentPayment] = useState(payment[0].type)
  return (
    <div className="Checkout">
      <div className="Checkout_Header">
        <Row
          className="Header_row"
          type="flex"
          justify="space-between"
          style={{ width: '100%' }}
        >
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
          <div className="Form_Input-Container">
            <label>
              {inputName}
              <b style={{ color: 'red' }}> *</b>
            </label>
            <Input
              style={{ backgroundColor: '#f2f2f2' }}
              className="Form_Input"
            ></Input>
          </div>
        ))}
      </div>
      <div className="Checkout_Form">
        <h3>Доставка</h3>
        <Radio.Group name="radiogroup" defaultValue={99}>
          <Row>
            <Col style={{ display: 'flex' }} xs={24} sm={12}>
              <Radio className="RadioWrapper" value={99}>
                Самовывоз: <b>бесплатно</b>
              </Radio>
            </Col>
            {radio.map((radioItem, index) => (
              <Col style={{ display: 'flex' }} xs={24} sm={12}>
                <Radio className="RadioWrapper" value={index}>
                  <div className="Radio_Text">
                    <span className="Radio_Title">{radioItem.title}</span>
                    {radioItem.subtitle && (
                      <span className="Radio_Subtitle">{radioItem.subtitle}</span>
                    )}
                  </div>
                </Radio>
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </div>
      <div className="Checkout_Form">
        <h3>Оплата</h3>
        <div className="Payment-Toggle">
          {payment.map((payment) => (
            <div
              className={`Payment ${payment.type === currentPayment && '__Active'}`}
              onClick={() => setCurrentPayment(payment.type)}
            >
              {payment.icon}
              <span>{payment.type}</span>
            </div>
          ))}
        </div>
        <div className="Form-Dropdown">
          <div className={'Form-Dropdown_Title'} style={{ marginBottom: '20px' }}>
            Компания для поучения счета
          </div>
          <Select className="Dropdown-Input" defaultValue="1">
            <Option value="1">ООО "Тестовая компания"</Option>
            <Option value="2">ООО "Тестовая компания"</Option>
            <Option value="3">ООО "Тестовая компания"</Option>
          </Select>
        </div>
      </div>
      <div className="Busket_Table">
        <BusketTable isCheckout data={dataTable} />
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
