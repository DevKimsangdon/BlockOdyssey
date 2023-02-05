import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {PagiNationContainer} from '../pagiNation/pagiNation'
import './main.css';


export const Main = () => {
// const {'상품번호','상품명'} = useTable ({columns,data});
  const products = useSelector((state) => state.search.products);
  const [data, setData] = useState([]);
  
  const table_header = [
    {
      title: '상품번호',
      className: 'index'
    },
    {
      title: '상품명',
      className: 'product'
    },
    {
      title: '브랜드',
      className: 'brand'
    },
    {
      title: '상품내용',
      className: 'contents'
    },
    {
      title: '가격',
      className: 'price'
    },
    {
      title: '평점',
      className: 'rating'
    },
    {
      title: '비고',
      className: 'etc'
    },
  ]

  return (
    <section className='main__total-section'>
      <table className='main__table-container'>
        <thead className='main__table-header'>
          <tr>
            {table_header.map((el,index)=>
              <th className={el.className} key={index}>{el.title}</th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {products?.map((el, index)=>
          <tr key={index}>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.brand}</td>
            <td className='item_description'>{el.description}</td>
            <td>{el.price}</td>
            <td>{el.rating}</td>
          </tr>
          )}
        </tbody>
      </table>
      <PagiNationContainer />
    </section>
  );
};
