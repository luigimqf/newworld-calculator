import styled from "styled-components";

export const HolderRecipe = styled.div`
  width:100%;

  display: flex;
  flex-direction:column;
  text-align:center;

`

export const ItemInfo = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  padding-bottom:8px;


`

export const HoldColapse = styled.div`
  width:25px;
  display:flex;

`

export const HoldItemName = styled.div`
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;

`

export const ItemLabel = styled.a`
  font-size: .85rem;
  color: ${({color}) => color};
`

export const RecipeItemIcon = styled.img`
  width:35px;
  height:35px;
`