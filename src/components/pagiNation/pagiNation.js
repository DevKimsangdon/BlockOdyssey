import { Button } from '../Button';
import './pagiNation.css';
import {LimitsState} from '../../features/search/Limits'
import PagiNation from '../../features/search/pagiNation';
/**
 * 페이지 당 limits
 * skip = n * limits
 * 페이지 수 counts < 10 이라면  ceil(총 검색 결과 /limits)
 * @returns 
 */
export const PagiNationContainer = () => {
  return (
    <section className='pagiNation__section'>
      <div className='sort-container'>
      <LimitsState></LimitsState>
      </div>
      <div className='pagiNation__pages'>
        <PagiNation />
      </div>
    </section>
  );
};
