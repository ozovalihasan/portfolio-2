/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@linaria/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as color from '../styleSheets/colorVariables';

const SearchBar = ({ searchKeys, keyword, setKeyword }) => {
  const handleChange = e => setKeyword(e.target.value);

  return (
    <SearchBarOuter>
      <UpdateFontAwesomeIcon icon={['fas', 'search']} />
      <SearchInput list="search-keys" name="browser" id="browser" type="text" value={keyword} onChange={handleChange} placeholder="Search" />

      <datalist id="search-keys">
        {searchKeys.map(searchWord => <option key={searchWord} value={searchWord} />)}
      </datalist>
    </SearchBarOuter>
  );
};

const SearchBarOuter = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: ${color.firstColor};
  font-size: 20px;
  position: relative

  @media screen and (min-width: 768px) {
    margin-left: 10px;
  }
`;

const UpdateFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  margin: 5px 0;
  background-color: transparent;
  outline: none;
  color: ${color.thirdColor};
  font-size: 20px;
`;

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  setKeyword: PropTypes.func.isRequired,
  searchKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default SearchBar;
