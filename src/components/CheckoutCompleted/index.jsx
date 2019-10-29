import React from 'react'
import './index.scss'

const CheckoutCompleted = ({ data }) => {
  return (
    <div className="CheckoutCompeted">
      <h1>Ваш заказ №547-78 от 25.06.2019, 12:45:14 успешно оформлен</h1>
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
