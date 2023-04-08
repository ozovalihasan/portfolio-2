/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type SearchBarType = {
  searchKeys: string[], 
  keyword: string, 
  setKeyword: (arg0: string) => void
}

const SearchBar = ( { searchKeys, keyword, setKeyword }: SearchBarType )  => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);

  return (
    <div>
      <FontAwesomeIcon icon={['fas', 'search']} />
      <input list="search-keys" name="browser" id="browser" type="text" value={keyword} onChange={handleChange} placeholder="Search" />

      <datalist id="search-keys">
        {searchKeys.map(searchWord => <option key={searchWord} value={searchWord} />)}
      </datalist>
    </div>
  );
};

export default SearchBar;
