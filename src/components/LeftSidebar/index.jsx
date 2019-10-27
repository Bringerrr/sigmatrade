import React from 'react'

import './index.scss'

const nav = [
  { type: 'text', value: 'Лента новостей' },
  { type: 'text', value: 'Группы' },
  { type: 'text', value: 'Контакты' },
  { type: 'text', value: 'Профиль покупателя' }
]
const buttons = [
  { type: 'button', value: 'Распродажа', color: '#8e3a88' },
  { type: 'button', value: 'Каталог продукции', color: '#523bc5' },
  { type: 'button', value: 'Витрина продукции', color: '#000000' }
]

const news = [
  { type: 'text', value: 'Лента новостей' },
  { type: 'text', value: 'Лента новостей' },
  { type: 'text', value: 'Лента новостей' },
  { type: 'text', value: 'Лента новостей' }
]

function LeftSidebar() {
  return (
    <div className="LeftSidebar">
      <div className="LeftSidebar_Nav">
        {nav.map((item) => (
          <a href="#" className="LeftSidebar_Item __Text">
            {item.value}
          </a>
        ))}
      </div>
      <div className="LeftSidebar_Buttons">
        {buttons.map((item) => (
          <a
            href="#"
            className="LeftSidebar_Item __Button"
            style={{ backgroundColor: item.color }}
          >
            {item.value}
          </a>
        ))}
      </div>
      <div className="LeftSidebar_News">
        {news.map((item) => (
          <a href="#" className="LeftSidebar_Item __Text">
            {item.value}
          </a>
        ))}
      </div>
    </div>
  )
}

export default LeftSidebar
