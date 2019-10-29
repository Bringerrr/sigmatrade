import React, { useState } from 'react'
import { Drawer, Button, Radio } from 'antd'

import './index.scss'

const RadioGroup = Radio.Group

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
  { type: 'text', value: 'Скачать номеклатуру' },
  { type: 'text', value: 'Скачать прайс' },
  { type: 'text', value: 'Скачать прайс Excell' },
  { type: 'text', value: 'Расписание обучения' }
]

function LeftSidebar() {
  const [state, setState] = useState({ visible: false, placement: 'left' })

  const showDrawer = () => {
    setState({
      ...state,
      visible: true
    })
  }

  const onClose = () => {
    setState({
      ...state,
      visible: false
    })
  }

  const onChange = (e) => {
    setState({
      ...state,
      placement: e.target.value
    })
  }
  return (
    <div className="LeftSidebar">
      {/* <Button className="showDrawer" type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <div className="Navbar-Container __wide">
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
      <div className="Navbar-Container __slim">
        <Drawer
          className="Navbar-Drawer"
          title="СТ 24"
          placement={state.placement}
          closable={false}
          onClose={onClose}
          visible={state.visible}
        >
          <div className="LeftSidebar_Nav">
            {nav.map((item) => (
              <a href="#" className="LeftSidebar_Item __Text">
                {item.value}
              </a>
            ))}
          </div>
          <div className="LeftSidebar_Buttons">
            {buttons.map((item) => (
              <a href="#" className="LeftSidebar_Item __Button">
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
        </Drawer>
      </div>
    </div>
  )
}

export default LeftSidebar
