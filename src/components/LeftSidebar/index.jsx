import React, { useState } from 'react'
import { Drawer, Button, Radio } from 'antd'
import { connect } from 'react-redux'
import { setSidebar } from '../../store/ui/ui.actions'

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

function LeftSidebar({ leftSidebar, setSidebar }) {
  console.log('sideBar', leftSidebar)
  const [state, setState] = useState({ visible: false, placement: 'left' })

  const showDrawer = () => {
    setSidebar(true)
  }

  const onClose = () => {
    setSidebar(false)
  }

  const onChange = (e) => {
    setState({
      ...state,
      placement: e.target.value
    })
  }
  return (
    <div className="LeftSidebar">
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
          title="Сигма Трейд 24"
          placement={state.placement}
          closable={false}
          onClose={onClose}
          visible={leftSidebar}
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
              <a
                style={{ color: item.color }}
                href="#"
                className="LeftSidebar_Item __Button"
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
        </Drawer>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({ leftSidebar: state.ui.leftSidebar }),
  { setSidebar }
)(LeftSidebar)
