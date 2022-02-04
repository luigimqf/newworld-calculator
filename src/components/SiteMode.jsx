import React, { useContext, useEffect, useState } from 'react'
import { MdArrowForwardIos,MdArrowBackIos, MdLightMode, MdDarkMode } from 'react-icons/md'
import { DisplayContext } from '../contexts/siteDisplay'
import { DisplayOptions, DisplaySelector } from '../styles/ItemSearch'


export function SiteMode(){

  const [displayOn, setDisplayOn] = useState(false)

  const [position, setPosition] = useState(-45)

  const [hoverColor, setHoverColor] = useState(null)

  const {newDisplay,setNewDisplay} = useContext(DisplayContext)

  const [currentDisplay, setCurrentDisplay] = useState(false)

  useEffect(() => {

    if(displayOn === true) setPosition(0)
    if(displayOn === false) setPosition(-40)

  }, [displayOn])

  useEffect(() => {
    if(currentDisplay === true) {
      setNewDisplay({
        color:'#ecf0f1',
        background:'#131313',
        border:'#ecf0f1'
      })
    }

    if(currentDisplay === false) {
      setNewDisplay({
        color:'#131313',
        background:'#ecf0f1',
        border:'#131313'
      })
    }

  }, [currentDisplay])

  function handleChangeDisplay(){
    setDisplayOn(prevDisplay => !prevDisplay)
  }

  function setDarkMode(){
    setCurrentDisplay(true)
  }
  function setLightMode(){
    setCurrentDisplay(false)

  }

  return(
    <DisplaySelector style={{left:position, backgroundColor:`${newDisplay.background}`}}>
      <DisplayOptions>
        <MdLightMode onClick={setLightMode} style={{width:25,height:25, cursor:'pointer',color:`${newDisplay?.color}`}}/>
        <MdDarkMode onClick={setDarkMode} style={{width:20,height:20, cursor:'pointer',color:`${newDisplay?.color}`}} />
      </DisplayOptions>

      {displayOn
      ? <MdArrowBackIos style={{cursor:'pointer', color:`${newDisplay.color}`}} onClick={handleChangeDisplay} />
      : <MdArrowForwardIos style={{cursor:'pointer', color:`${newDisplay.color}`}} onClick={handleChangeDisplay} />
      }

    </DisplaySelector>
  )
}