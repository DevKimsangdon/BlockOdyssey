import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import './button.css';

export const Button = (handler,{title,faicon ="faSortDown", transform= 90}) => {
  return (
    <div onClick={handler} className='btn'>
        {title ? title : <FontAwesomeIcon icon={faicon}  transform={{rotate:transform}} />}
    </div>
  );
};
