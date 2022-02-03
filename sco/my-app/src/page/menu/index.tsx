import React, { useState, useEffect } from 'react'
import { Row } from 'antd'
import { useNavigate } from 'react-router-dom'

export const MenuPage = () => {
  const history = useNavigate()
  return (
    <Row justify='space-around'>
      This is menu content
    </Row>
  )
}

export default MenuPage