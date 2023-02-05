import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setList,setTotalProducts } from './searchSlice';
import './search.css';


export const SearchBox = () => {
  const dispatch = useDispatch();
  const limits = useSelector((state) => state.search.limits);
  const filter = useSelector((state) => state.search.filter);

  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  const [API_endPoint,setAPI_endPoint] = useState('https://dummyjson.com/products?limit=10');
  
  useEffect(() => {
    setAPI_endPoint(`https://dummyjson.com/products?limit=${limits}`)
  }, [limits]);

  const onSearch = (e) =>{
    setSearchValue(e.target.value);
    console.log(searchValue)
  }

  async function getProductData() {
    try {
      if(searchValue === '' || searchValue === null ){
        const response = await axios.get(`${API_endPoint}`);
        console.log(response.data)
        dispatch(setList(response.data.products));
        dispatch(setTotalProducts(response.data.total));
        setData(response.data.products)
      } else {
        let result =  [];
        console.log(filter);
        const response = await axios.get(`${API_endPoint}`);
        switch(filter){
          case "title" :result = response.data.products.filter( v => v.title== searchValue)
            break;
          case "brand": result = response.data.products.filter( v => v.brand == searchValue)
            break;
          case"description": result = response.data.products.filter( v => v.description == searchValue)
            break;
          default : result = response.data.products.filter( v => v.id == searchValue || v.title== searchValue ||v.brand == searchValue||v.description == searchValue||v.price == searchValue)
        }
        
        dispatch(setList(result));
        dispatch(setTotalProducts(result));
        setData(result)
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <label>
        <input onChange={onSearch} type="search" value={searchValue}/>
        <button onClick={getProductData} className='function_btn'> 조회</button>
    </label>
  );
}

export default SearchBox;
