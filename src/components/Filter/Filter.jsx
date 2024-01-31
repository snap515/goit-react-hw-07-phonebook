import { useDispatch } from 'react-redux';
import { saveFilterValue } from '../../redux/filter/filterReducer'
import css from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    const filterValue = e.target.value.trim();
    dispatch(saveFilterValue(filterValue))
  }
  return (
    <div className={css.filterWrapper}>
      <label className={css.filterLabel} htmlFor="filter">Find contacts by name</label>
      <input className={css.filterInput}type="text" id="filter" name="filter" onChange={onFilterChange}  placeholder="John" />
    </div>
  )
}