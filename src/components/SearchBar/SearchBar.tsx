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
    <div className='flex items-center relative ml-4'>
      
      <input 
        className='custom-input'
        list="search-keys" 
        name="browser" 
        id="browser" 
        type="text" 
        value={keyword} 
        onChange={handleChange} 
        placeholder="Search" 
      />

      <FontAwesomeIcon icon={['fas', 'search']} className='absolute right-2 text-third ' />
      <datalist id="search-keys">
        {searchKeys.map(searchWord => <option key={searchWord} value={searchWord} />)}
      </datalist>
    </div>
  );
};

export default SearchBar;
