import React, { useState, useEffect, useContext } from 'react'
import recipes from '../utils/recipes'

import { DisplaySearchItems, SearchBox, SearchInput } from '../styles/ItemSearch'

import {IoIosClose} from 'react-icons/io'
import { ItemSearched } from './ItemSearched'
import { DisplayContext } from '../contexts/siteDisplay'
import { IconContext } from '../contexts/itemDisplay'

export function Search(){
  
  const [query, setQuery] = useState('')
  const [items, setItems] = useState(recipes)
  const [focused, setFocused] = useState(false)
  const {newDisplay} = useContext(DisplayContext)
  const {setCurrentItem} = useContext(IconContext)


  useEffect(() => {
  
    handleFilter(query)
  }, [query])

  function handleChangeQuery(e){
    setQuery(e.target.value)
  }

  function handleFilter(query){
    const filteredItems = recipes.filter(item => {
      const formatedItem = item.label.toLowerCase().split(' ').join('')
      const formatedQuery = query.toLowerCase().split(' ').join('')
      const queryIndex = formatedItem.search(formatedQuery)

      return queryIndex >= 0
    })

    setItems(filteredItems)
  }

  
  function handleCleanInput(){
    setQuery('')
    setCurrentItem(null)
  }

  function handleSelectItem(item){
    setQuery(item.label)
    setFocused(false)
    setCurrentItem(item)
  }


  return(
    <SearchBox> 
      <SearchInput 
        onBlur={() => {
          setTimeout(() => {
            setFocused(false)
          }, 150);
        }}
        onFocus={() => setFocused(true) }
        onChange={handleChangeQuery} 
        placeholder='Search for a Item' 
        type='search' 
        value={query}
        focused={focused}
        color={newDisplay.color}
      />

      {query
      && <IoIosClose onClick={handleCleanInput} style={{color:newDisplay.color,cursor:'pointer'}} />}

      {(query && focused) && (
        <DisplaySearchItems style={{backgroundColor:`${newDisplay.background}`}}>
          {items.map((item) => 
            <ItemSearched  key={item.key} selectItem={() => handleSelectItem(item) } name={item.label} xp={item.xp +  ' xp'} image={item.image}/>
          )}
        </DisplaySearchItems>

        
      )}

    </SearchBox>
  )
}