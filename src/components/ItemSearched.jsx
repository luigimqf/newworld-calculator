import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { DisplayContext } from '../contexts/siteDisplay'
import { Item, ItemIcon, ItemInfoHolder, ItemName, ItemXp } from '../styles/ItemSearch'

export function ItemSearched({name,xp,image,selectItem}){

  const {newDisplay} = useContext(DisplayContext)

  return(
    <Item style={{backgroundColor:`${newDisplay.background}`}} onClick={selectItem}>
      <ItemIcon src={image}/> 
      <ItemInfoHolder> 
        <ItemName color={newDisplay.color}>{name}</ItemName>
        <ItemXp>{xp}</ItemXp>
      </ItemInfoHolder>
    </Item>
  )
}