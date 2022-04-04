import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './FIlters/FilterByCategory';
import FilterByPrice from './FIlters/FilterByPrice';
import FilterByService from './FIlters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      'category.id': newCategoryId,
    };

    onChange(newFilters);
  };

  const handleChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />

      <FilterByService filters={filters} onChange={handleChange} />
      
    </Box>
  );
}

export default ProductFilters;
