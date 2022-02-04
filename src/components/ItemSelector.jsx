import React, {useState, useContext } from 'react'

import { RecipeHolder } from './RecipeHolder'
import { Input, ItemSearch } from '../styles/ItemSearch'

import {FaTrash} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {Search}  from './Search'
import { DisplayContext } from '../contexts/siteDisplay'
import { IconContext } from '../contexts/itemDisplay'

export function ItemSelector({deleteItem,index}){


  const [quantity, setQuantity] = useState(1)
  const {newDisplay} = useContext(DisplayContext)
  const {currentItem, displayIcon} = useContext(IconContext)

  function handleChangeQuantity(e){
    setQuantity(e.target.value)
  }


  return(
    <> 
        <ItemSearch 
          style={{position:'relative', 
                  backgroundColor:`${newDisplay?.background}`, 
                  color:`${newDisplay?.color}`,
                  
                }}
        >


          <FaTrash 
            style={{width:15,
                    height:15,
                    position:'absolute',
                    top:10,right:10, 
                    color:`${newDisplay.color}`,
                    cursor:'pointer'
                  }}
            onClick={deleteItem}
          />

          {currentItem
          && <img src={currentItem?.image} alt='img item'/>
          }


          <Input 
            placeholder='0' 
            defaultValue={1} 
            type='number'
            onChange={handleChangeQuantity}
            value={quantity}
            color={newDisplay.color}
          />
          <div style={{width:'60%',display:'flex',alignItems:'center',zIndex:'999'}}> 
            <AiOutlineSearch />

            <Search />
          </div>

        </ItemSearch>

        {currentItem && (
          <RecipeHolder quantity={quantity} item={currentItem}  />
        )}
    </>
    )
  }



