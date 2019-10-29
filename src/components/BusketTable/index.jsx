import React, { useState } from 'react'
import { Table, Divider, Tag, Icon } from 'antd'
import Busket from '../../containers/Busket'
import './index.scss'

const BusketTable = ({ data, isCheckout }) => {
  const columns = [
    {
      title: 'Товары',
      dataIndex: 'products',
      key: 'products',
      render: (product) => (
        <div className="TableCell_Product">
          <div className="Product_ImageContainer">
            <img src={product.img} alt="product" />
          </div>
          <div className="Product_Description">
            <h3>{product.name}</h3>
            <h3>{product.type}</h3>
            <div className="Product_Quantity">
              <div className="Quantity_StatusIcon"></div>
              <div className="Quantity_Status">{product.quantity}</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Количество',
      dataIndex: 'count',
      key: 'count',
      render: (count, record) => (
        <div className="TableCell_Count">
          <div className="TableCell_Count_Number">{count}</div>
          <div className="Buttons-Container">
            <Icon type="plus" />
            <Icon type="minus" />
          </div>
        </div>
      )
    },
    {
      title: 'Сумма',
      dataIndex: 'amount',
      key: 'amount'
    }
  ]

  if (isCheckout) {
    columns.push({
      title: 'Бонусы',
      dataIndex: 'bonuses',
      key: 'bonuses',
      render: (bonus) => <span style={{ color: ' #8e3a88' }}>{bonus}</span>
    })
  }

  return (
    <Table
      pagination={false}
      className="BusketTable"
      dataSource={data}
      columns={columns}
      scroll={{ x: 1300 }}
    />
  )
}

export default BusketTable
