import React, { useState } from 'react'
import { Input, Button } from 'antd'
import './index.scss'

const { Search } = Input

function CustomSearchInput() {
  return (
    <div className="CustomSearchInput">
      <Input style={{ width: '200px' }} placeholder="Поиск по каталогу" />
      <Button className="searchButton" type="primary" shape="circle" icon="search" />
    </div>
  )
}

export default CustomSearchInput
