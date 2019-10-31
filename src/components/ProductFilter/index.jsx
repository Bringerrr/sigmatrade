import React from 'react'
import { Select, Input, Row, Checkbox, Button, Col } from 'antd'
import './index.scss'

const { Option, OptGroup } = Select
const Manufacturers = [
  'Bosch',
  'DARINA',
  'Electolux',
  'Forneli',
  'GEFEST',
  'Gorenije',
  'Hansa',
  'Hotpoint-Ariston',
  'Krotig',
  'LEX'
]
const colors = ['Бежевый', 'Голубой', 'Желтый', 'Красный']

const managing = [
  'Кнопочное-механическое',
  'Сенсорное',
  'Слайдерное',
  'Кнопочное-электронное',
  'Поворотный переключатель'
]

const typeOfInstalation = ['Встраиваемая', 'Пристенная', 'Островная']

const typeOfLightning = ['Лампа накаливания(LED)', 'Светодиоды', 'Галоген']

const quantity = ['в наличии', 'под заказ']

function handleChange(value) {
  console.log(`selected ${value}`)
}

function ProductFilter({ drawer }) {
  return (
    <div className={`ProductFilter ${drawer ? '__Drawer' : null}`}>
      <div className="ProductFilter_Title">
        <h3>Фильтр товаров</h3>
      </div>

      <div className="Product_Attribute">
        <b>Тип вытяжки</b>
        <Select defaultValue="купольные" onChange={handleChange}>
          <Option value="не Купольные">Не Купольные</Option>
          <Option value="почти купольные">почти Купольные</Option>
          <Option value="Купольные">Купольные</Option>
        </Select>
      </div>
      <div className="Product_Attribute">
        <b>Цена, Р</b>
        <Row style={{ marginBottom: '10px' }}>
          <Col span={11}>
            <Input placeholder="от 2 478"></Input>
          </Col>
          <Col offset={2} span={11}>
            <Input placeholder="до 587 412"></Input>
          </Col>
        </Row>

        <Checkbox>Скидки и акции</Checkbox>
      </div>

      <div className="Product_Attribute">
        <b>Производитель</b>
        {Manufacturers.map((Manufacturer) => (
          <Checkbox>{Manufacturer}</Checkbox>
        ))}
        <a className="" href="#">
          показать всё
        </a>
      </div>

      <div className="Product_Attribute">
        <b>Цвет</b>
        {colors.map((color) => (
          <Checkbox>{color}</Checkbox>
        ))}
        <a className="" href="#">
          показать всё
        </a>
      </div>

      <div className="Product_Attribute">
        <b>Ширина встраивания, мм</b>
        <Row tpy="flex" justify="space-between">
          <Col span={11}>
            <Input placeholder="от 21"></Input>
          </Col>
          <Col offset={2} span={11}>
            <Input placeholder="до 118"></Input>
          </Col>
        </Row>
      </div>

      <div className="Product_Attribute">
        <b className="Performance">
          Производительность, м<sup>3</sup>/час
        </b>
        <Row>
          <Col span={11}>
            <Input placeholder="от 21"></Input>
          </Col>
          <Col offset={2} span={11}>
            <Input placeholder="до 118"></Input>
          </Col>
        </Row>
      </div>

      <div className="Product_Attribute">
        <b>Управление</b>
        {managing.map((managing) => (
          <Checkbox>{managing}</Checkbox>
        ))}
      </div>

      <div className="Product_Attribute">
        <b>Тип установки</b>
        {typeOfInstalation.map((typeOfInstalation) => (
          <Checkbox>{typeOfInstalation}</Checkbox>
        ))}
      </div>

      <div className="Product_Attribute">
        <b>Тип освещения</b>
        {typeOfLightning.map((typeOfLightning) => (
          <Checkbox>{typeOfLightning}</Checkbox>
        ))}
      </div>

      <div className="Product_Attribute">
        <b>Наличие на складе</b>
        {quantity.map((quantity) => (
          <Checkbox>{quantity}</Checkbox>
        ))}
      </div>
      <div className="Button-Container">
        <Button>Показать</Button>
        <a href="#">Сбросить</a>
      </div>
    </div>
  )
}

export default ProductFilter
