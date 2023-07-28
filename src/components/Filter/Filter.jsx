import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

class Filter extends Component {
  
  render() {
    const { value, onFilter } = this.props;
    return (
      <>
        <label className={style.label}>
          Find contacts by name{' '}
          <input
            className={style.input}
            type="text"
            value={value}
            onChange={onFilter}
          />
        </label>
      </>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
