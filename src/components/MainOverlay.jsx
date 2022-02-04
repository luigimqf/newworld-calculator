import React, { useContext, useState } from 'react'
import { Overlay } from '../styles/ItemSearch'
import {MdArrowLeft} from 'react-icons/md'
import { DisplayContext } from '../contexts/siteDisplay'

export function MainOverlay(){

  const [leftPosition, setLeftPosition] = useState(0)

  const {newDisplay} = useContext(DisplayContext)

  function changeRightPosition(){
    setLeftPosition(-300 + 'px')
  }
  return(
    <Overlay style={{left:leftPosition, backgroundColor:`${newDisplay.background}`,color:`${newDisplay.color}`}}>
      <h6 style={{fontFamily:'Roboto'}}>Six Items Maximum</h6>
      <MdArrowLeft style={{color:`${newDisplay.color}`}} onClick={changeRightPosition} />
    </Overlay>
  )
}