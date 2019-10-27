import React from 'react'
import CustomSearchInput from '../../components/CustomSearchInput'
import BusketTable from '../../components/BusketTable'
import rangeHood from '../../assets/rangeHood.webp'

import { Input, Button } from 'antd'
import './index.scss'

console.log('Busket', rangeHood)

const dataTable = [
  {
    key: 1,
    products: {
      name: 'Jessica slim 600 white push button',
      type: 'Вытяжка кухонная',
      quantity: 'в наличии',
      img: rangeHood
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
      img: rangeHood
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
      img: rangeHood
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
        <h1>Корзина </h1>
        <CustomSearchInput />
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

              <Button>Оформить заказ</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Busket
