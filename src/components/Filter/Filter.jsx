import propTypes from 'prop-types';
import { FilterWrap, FilterInput } from './Filter.styled';

export const Filter = ({ filter, handleChange }) => (
  <FilterWrap>
    <label>
      Find contacts by Name{' '}
      <FilterInput
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  </FilterWrap>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
