import React from 'react'
import './index.scss'
import HeaderWithSearch from '../../components/HeaderWithSearch'

const CheckoutCompleted = ({ data }) => {
  return (
    <div className="CheckoutCompeted">
      <HeaderWithSearch title="Ваш заказ №547-78 от 25.06.2019, 12:45:14 успешно оформлен" />
      <p>
        Вы можете следить за выполнение своего загаза в{' '}
        <a href="#">Персональном разделе сайта</a>
      </p>
      <p>
        Для того, чтобы зайти в этот раздел вам необходимо ввести логи и пароль
        пользователя сайта
      </p>
    </div>
  )
}

export default CheckoutCompleted
