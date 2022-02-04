import { ItemXp } from "../styles/ItemSearch";
import { ItemLabel,HolderRecipe, RecipeItemIcon, ItemInfo, HoldItemName, HoldColapse } from "../styles/recipeStyle";
import {IoMdArrowDropright,IoMdArrowDropdown} from 'react-icons/io'
import { useContext, useState } from "react/cjs/react.development";
import { DisplayContext } from "../contexts/siteDisplay";


export function Recipe({item,parentQuantity,isFirstHierarchy,hierarchyLevel,children}){
  
  const [displayChildren, setDisplayChildren] = useState(false)
  const {newDisplay} = useContext(DisplayContext)

  function changeDisplayChildren(){
    setDisplayChildren(prevValue => !prevValue)
  }
  return(
    <HolderRecipe >
      {isFirstHierarchy 
      ? children
      : (
        <>
          <ItemInfo style={{paddingLeft:`${hierarchyLevel * 20}px`}}>
          <HoldColapse>
            {displayChildren
            ? <IoMdArrowDropdown  color={newDisplay.color} style={{width:'100%', height:'100%'}} onClick={changeDisplayChildren} />
            : <IoMdArrowDropright color={newDisplay.color} style={{width:'100%', height:'100%'}} onClick={changeDisplayChildren}/>
            }
          </HoldColapse>
          <div style={{width:'20%',height:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}> 
            <RecipeItemIcon  src={item.image}/>
            <ItemLabel color={newDisplay.color}>{item.quantity * parentQuantity}</ItemLabel>
          </div>
            <HoldItemName style={{display:'flex',flexDirection:'column'}}>
              <ItemLabel color={newDisplay.color} >{item.label}</ItemLabel>
              <ItemXp color={newDisplay.color}>({item.xp} xp)</ItemXp>
            </HoldItemName>
          </ItemInfo>
          {displayChildren && children}
        </>
      )}
    </HolderRecipe>
  )
}