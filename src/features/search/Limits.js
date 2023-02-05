import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { setLimits } from './searchSlice';

export const LimitsState = () => {
    const dispatch = useDispatch();
    const [dropDown, setDropDown] = useState(false);
    const [default_sort, setDefault_sort] = useState(10);
    const sort_number = [
        {sort_number : 10},
        {sort_number : 30},
        {sort_number : 50},
        {sort_number : 100},
      ]
    
  const showSortDropDown = () => {
    setDropDown(!dropDown);
  }
  const hideSortDropDown = (e) => {
    if(e.target.nodeName === "INPUT"){
        selectSortOptionItem(e.target.title);
        dispatch(setLimits(e.target.title));
      setDropDown(!dropDown)
    }
  }
  const selectSortOptionItem = (target_contents) => {
    setDefault_sort(target_contents);
  }
  return (
    <>
        <div onClick={showSortDropDown} className='sort__selected-view'>페이지당 행 :{default_sort} <FontAwesomeIcon icon={faSortDown} transform={{rotate:dropDown? 180:0}}  /></div>
        {dropDown ? 
        <fieldset className='sort-fieldset'>
            {sort_number.map((el,index )=>
            <label key={index} className='sort_label' >
                <input  onClick={hideSortDropDown} className='sort_input' name={el.sort_number} type="radio" value={el.sort_number} title={el.sort_number}/>
                <p className='sort_title' >{el.sort_number}</p>
            </label> 
            )}
        </fieldset>
        : 
        ""
        }
    </>
  );
}

