import {useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, setList, setSkip } from './searchSlice';
import '../../components/Button/button.css';

export const PagiNation = () => {
  const dispatch = useDispatch();
  const limits = useSelector((state) => state.search.limits);
  const skip = useSelector((state) => state.search.skip);
  const total_products = useSelector((state) => state.search.total);


  const [skipQuery,setSkipQuery] = useState(skip);
  const [now, setNow] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [pageNumber, setPageNumber] = useState([])
  const [API_endPoint,setAPI_endPoint] = useState('https://dummyjson.com/products?limit=10');

  const eventHandle = (e) =>{
    dispatch(setSkip((e.target.value-1) * 10));
    const Skip = (e.target.value-1) * 10;
    setSkipQuery(Skip);
    setAPI_endPoint(`https://dummyjson.com/products?limit=${limits}&skip=${Skip}`)
    getProductData(`https://dummyjson.com/products?limit=${limits}&skip=${Skip}`);
  }
  
  useEffect(() => {
    if(pageNumber.length < (total_products /pageSize) - 1) {
        for (let index = 1; index < total_products /pageSize; index++) {
            pageNumber.push(index)
            setPageNumber([...pageNumber])
    }
  }},[total_products])

  async function getProductData(API_ENDPOINT) {
    try {
      const response = await axios.get(API_ENDPOINT);
      console.log(response);
      dispatch(setList(response.data.products));
        } catch (error) {
        console.error(error);
        }
  }

  return (
    <>
        {pageNumber?.map((el, index)=>
        <button key={index} onClick={eventHandle} value={el} title={el} className='btn'>{el}</button>
        )}
    </>
  );
}

export default PagiNation;
