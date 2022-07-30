import AccountItem from '@/components/AccountItem';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import search from '@/services/searchService';

import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { useDebounce } from '@/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounce = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await search(debounce);
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  const handleClearResult = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(!showResult);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(e.target.value);
    }
  };
  return (
    <div>
      <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive={true}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-label')}>Account</h4>
              {searchResult.map((result) => {
                return <AccountItem key={result.id} data={result} />;
              })}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className={cx('search')}>
          <input
            type="text"
            placeholder="Search video"
            ref={inputRef}
            spellCheck={false}
            value={searchValue}
            onChange={handleChange}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClearResult}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
