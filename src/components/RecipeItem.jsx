import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { DisplayContext } from '../contexts/siteDisplay'
import { ItemXp } from '../styles/ItemSearch'
import {  HoldColapse, HoldItemName, ItemInfo, ItemLabel, RecipeItemIcon } from '../styles/recipeStyle'

export function RecipeItem({quantity,name,xp,image,hierarchyLevel}){

  const {newDisplay} = useContext(DisplayContext)

  return(
      <ItemInfo style={{paddingLeft:`${hierarchyLevel * 20}px`}}>
        <HoldColapse/>
        <div style={{width:'20%',height:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}> 
          <RecipeItemIcon src={image}/>
          <ItemLabel color={newDisplay.color}>{quantity}</ItemLabel>
        </div>
        <HoldItemName style={{display:'flex',flexDirection:'column'}}>
          <ItemLabel color={newDisplay.color}>{name}</ItemLabel>
          <ItemXp color={newDisplay.color}>({xp})</ItemXp>
        </HoldItemName>
      </ItemInfo>
  )
}