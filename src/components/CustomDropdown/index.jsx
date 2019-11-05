import React, { useState } from 'react'
import { Icon } from 'antd'
import './index.scss'

function CustomDropDown({ data }) {
  const stateData = {}

  data.forEach((drop) => (stateData[drop.id] = false))
  const [state, setState] = useState(stateData)
  const togleDropDown = (id) => {
    setState({ ...state, [id]: !state[id] })
  }
  return (
    <div className="CustomDropDown">
      {data.map((dropDownItem) => (
        <div className="CustomDropDown-Container">
          <div className="CustomDropDown_Title">
            <h3 style={{ fontWeight: 'bold' }}>{dropDownItem.title}</h3>{' '}
            {!state[dropDownItem.id] ? (
              <Icon onClick={() => togleDropDown(dropDownItem.id)} type="plus" />
            ) : (
              <Icon onClick={() => togleDropDown(dropDownItem.id)} type="minus" />
            )}
          </div>
          {state[dropDownItem.id] && (
            <div className="CustomDropDown_Description">
              <span>{dropDownItem.description}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CustomDropDown
