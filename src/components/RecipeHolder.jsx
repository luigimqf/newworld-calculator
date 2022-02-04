import React, { useContext } from 'react'
import { DisplayContext } from '../contexts/siteDisplay'
import { ItemRecipes } from '../styles/ItemSearch'
import { Recipe } from './Recipe'
import { RecipeItem } from './RecipeItem'


export function RecipeHolder({item,quantity=1}){

  const {newDisplay} = useContext(DisplayContext)

  function constructList(item,quantity,hierarchyLevel = 0){

    if(item.recipe){
      const isFirstHierarchy = !Object.keys(item).includes('quantity')
      return (
        <Recipe isFirstHierarchy={isFirstHierarchy} hierarchyLevel={hierarchyLevel} parentQuantity={quantity} item={item}> 
          {item.recipe.map((i) => constructList(i,quantity,hierarchyLevel + 1))}
        </Recipe >
      )
    }

    return <RecipeItem hierarchyLevel={hierarchyLevel} image={item.image} xp={item.xp} name={item.label} quantity={quantity * item.quantity}/>
  }

  return(
    <ItemRecipes style={{position:'relative',backgroundColor:`${newDisplay.background}`}}>
      {constructList(item,quantity)}
    </ItemRecipes>
  )
}