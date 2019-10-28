import React from 'react'
import './index.scss'

const colors = {
  price: { true: 'rgba(0, 0, 0, 0.502)', false: 'rgb(0, 0, 0)' },
  quantity: {
    'в наличии': 'rgb(102, 170, 5)',
    'нет в наличии': 'rgba(1, 1, 1, 0.502)',
    мало: 'rgb(240, 158, 1)'
  }
}

function Product({ data }) {
  const { title, type, price, quantity, markup, margin, priceWithMarkup, img } = data
  return (
    <div className="Product">
      <div className="imgContainer">
        <img width={'100%'} src={img} alt={title} />
      </div>
      <h3 className="Product_Title">{title}</h3>
      <span className="simpleText">{type}</span>
      <b
        style={{
          color:
            quantity === 'нет в наличии' ? colors.price.true : colors.price.false
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
  )
}

export default Product
