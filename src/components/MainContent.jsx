import { useState, useEffect, useRef, useContext } from "react";

import { HoldMain, Main, NewItemButton, NewWorldIcon, NewWorldWallpaper, Parallax, ParallaxWallpaper } from "../styles/ItemSearch";

import { SiteMode } from "./SiteMode";
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {ItemSelector} from './ItemSelector'
import {MainOverlay} from './MainOverlay'
import { DisplayContext } from "../contexts/siteDisplay";
import { ItemIconProvider } from "../contexts/itemDisplay";

export function MainContent() {

  const [isArrayFull, setIsArrayFull] = useState(false)
  const [itemArray, setItemArray] = useState([generateRandomToken()])
  const [offSetY, setOffSetY] = useState(0)
  const {newDisplay} = useContext(DisplayContext)

  const handleScroll = () => setOffSetY(window.pageYOffset)
  const mainRef = useRef(null)

  
  useEffect(() => {

    setIsArrayFull(false)
    setItemArray([generateRandomToken()])

  }, [isArrayFull])

  useEffect(() => {

    window.addEventListener('scroll', handleScroll)

    return() => window.removeEventListener('scroll',handleScroll)

  }, [])
  

  function generateRandomToken(){
    return Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
  }

  function handleNewItemSelector(){
    if(itemArray.length > 20){
      setIsArrayFull(true)
    }

    setItemArray((prevValue) => [...prevValue,generateRandomToken()])

  }

  function handleRemoveItem(itemToRemove){
    if(itemArray.length === 1) return
    console.log(itemArray)
    const newitems = itemArray.filter(item => item !== itemToRemove)
    setItemArray(newitems)
    console.log(newitems)

  }

  return (
      <HoldMain> 
        <ParallaxWallpaper style={{transform:`translateY(${offSetY * 1}px)`}}/>
        <Main ref={mainRef}>
            <NewWorldIcon src="https://upload.wikimedia.org/wikipedia/pt/4/46/New_World_Logo.png" draggable="false"/>
          <SiteMode />

          {isArrayFull
          ? alert('Atingiu o maximo de Items')
          : itemArray.map((item,index) => (
              <ItemIconProvider key={item}>
                <ItemSelector index={index} deleteItem={() => handleRemoveItem(item) } />
              </ItemIconProvider>
          ))
          }

          <NewItemButton onClick={handleNewItemSelector} style={{backgroundColor:`${newDisplay.background}`, color:`${newDisplay.color}`}}> 
            <BsFillPlusCircleFill/> 
            NEW ITEM
          </NewItemButton>

          
          <MainOverlay />
        </Main>
      </HoldMain>
  );
}