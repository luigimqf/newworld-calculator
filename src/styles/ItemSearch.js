
import styled, { keyframes } from "styled-components";
import img from '../assets/teste.jpg'


const faded = keyframes`

  from{
    opacity:0;
  }

  to{
    opacity:100;
  }

`

const overlayed = keyframes`

  from{
    left:-300px;
  }

  to{
    left:0;
  }

`

export const HoldMain = styled.div`
  max-width:100vw;
  height:100vh;
  position:relative;
`

export const Main = styled.main`
  max-width:100%;
  min-height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overflow:auto;

`

export const NewWorldIcon = styled.img`

  width: 444px;
  height:125.25px;
  position:absolute;
  margin-top:40px;
  top:0;
  animation: ${faded} 2s linear;
  src:"https://upload.wikimedia.org/wikipedia/pt/4/46/New_World_Logo.png";
  user-select:none;

`

export const ParallaxWallpaper = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-image: url("https://wallpaperaccess.com/full/5710886.jpg");
  background-size:cover;
`

export const Overlay = styled.div`

  width:300px;
  height:50px;

  display:flex;
  align-items:center;
  justify-content:flex-end;

  font-size:1.5rem;
  border-bottom-right-radius:5px;
  border-top-right-radius:5px;

  position:fixed;
  left:0;
  top:50px;
  animation: ${overlayed} 1s linear;
  transition:0.5s;
  cursor: pointer;

  h6{
    margin-right:70px;
  }

`

export const DisplaySelector = styled.div`
  width:55px;
  height:80px;
  position:fixed;
  top:350px;
  left: 0;
  border-bottom-right-radius:5px;
  border-top-right-radius:5px;
  display:flex;
  align-items: center;
  transition:0.5s;
`

export const DisplayOptions = styled.div`
  width:45px;
  height:100%;

  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;

`

export const ItemSearch = styled.div`
  width:400px;
  height:100px;

  display:flex;
  justify-content:space-evenly;
  align-items:center;
  margin-top:5px;
  animation: ${faded} 1s linear;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  touch-action:none;

  &:hover{
    cursor: grab;
  }

`

export const ItemRecipes = styled.div`
  width:400px;
  height:fit-content;

`

export const Input = styled.input`

  width:35px;
  height:25px;
  box-shadow: 0 0 0 0;
  color: ${({color}) => color}; 
  border: 0 none;
  border-bottom: 2px solid #9F957E; 
  outline: 0;
  background:none;


  ::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
  }

  &:focus{
    border-bottom: ${({color}) => `2px solid ${color}`}; 
  }
  
`

export const SearchInput = styled.input`

  width:100%;
  height:55%;
  border:none;
  position:relative;
  background-color:transparent;
  outline:none;
  text-align:center;
  color: ${({color}) => color}; 
  border: 0 none;
  border-bottom: 2px solid #9F957E;


  &:focus{
    border-bottom: ${({color}) => `2px solid ${color}`}; 
  }

  ::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration{
    -webkit-appearance:none
  }

`

export const SearchBox = styled.div`
  width:200px;
  height:45px;
  border-width:1px;
  border-bottom-width:1px;
  position:relative;
  display:flex;
  align-items:center;
`


export const DisplaySearchItems = styled.div`
  width:200px;
  height:fit-content;
  max-height: 200px;
  position:absolute;
  top:45px;
  overflow:auto;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  overflow-x:hidden;
  z-index:999;
`

export const Item = styled.div`
  width:200px;
  height:45px;

  display: flex;
  justify-content: flex-start;
  text-align:center;
  align-items:center;
  cursor: pointer;

  transition: .3s;

  &:hover{
    background-color:#bdc3c7;
  }


`

export const ItemIcon = styled.img`
  width:35px;
  height:35px;
`


export const ItemName = styled.p`

  font-size: .8rem;
  color: ${({color}) => color};

`

export const ItemXp = styled.p`
    font-size: 0.7rem;
    color: ${({color}) => color};
`
export const ItemInfoHolder = styled.div`

  width:70%;
  height:45px;
  display: flex;
  justify-content:space-around;
  align-items:center;

`


export const ItemDescription = styled.div`
  width:60%;
  height:100%;

`

export const NewItemButton = styled.button`
  display:flex;
  justify-content:space-evenly;
  align-items:center;


  margin-top:15px;
  width:120px;
  min-height:35px;
  border-radius:5px;
  outline:none;
  border:none;
  cursor: pointer;
  position:fixed;
  font-family: 'Roboto', sans-serif;
  bottom:15px;
  font-size:.8rem;
  transition:0.5s;


`

