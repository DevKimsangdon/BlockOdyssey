import { useState } from 'react';
import { SearchBox } from '../../features/search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../features/search/searchSlice';
import './header.css';

export const Header = () => {
  const dispatch = useDispatch();
  //plain text 
  const title = "상품검색";
  const function_name = "검색";
  const category_list = [
    {name: 'total', value: 'total', title: '전체'},
    {name: 'title', value: 'title', title: '상품명'},
    {name: 'brand', value: 'brand', title: '브랜드'},
    {name: 'description', value: 'description',title: '상품설명'},
  ]
  const [default_search, setDefault_search] = useState("전체");
  const [dropDown, setDropDown] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const showDropDown = () => {
    setDropDown(!dropDown);
  }
  const hideDropDown = (e) => {
    if(e.target.nodeName === "INPUT"){
      selectOptionItem(e.target.title);
      setDropDown(!dropDown)
      dispatch(setFilter(e.target.name));
    }
  }
  const selectOptionItem = (target_contents) => {
    setDefault_search(target_contents);
  }

  return (
    <section className='header-section'>
      <div className='header__title-container'>
        {title}
      </div>
      <div className='header__bottom-container'>
          <div className='header__bottom-title'>{function_name}</div>
          <div className='header__function-container'>
              <div className='search_option__conatiner'>
                <div onClick={showDropDown} className='seacrh__selected-view'>{default_search}</div>
                <FontAwesomeIcon icon={faSortDown} transform={{rotate:dropDown? 180:0}}  />
                {dropDown ? 
                <fieldset className='drop_down__container'>
                  {category_list.map((el,index )=>
                    <label key={index} className='drop_down__option-items' >
                      <input  onClick={hideDropDown} className='drop_down__option-input' name={el.name} type="radio" value={el.value} title={el.title}/>
                      <p className='search__dropdown-items' >{el.title}</p>
                    </label> 
                  )}
                </fieldset>
                : 
                ""
                }
              </div>
              <SearchBox value={searchValue} className='search_input'>test</SearchBox>
          </div>
      </div>
    </section>
  );
};
