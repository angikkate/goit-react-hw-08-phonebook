import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(setFilter(e.target.value));

  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.input}
        placeholder="Find"
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};

export default Filter;