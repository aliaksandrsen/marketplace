import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { paths } from 'routes/helpers';
import Button from 'components/Button';
import Input from 'components/Input';
import { selectIsLogged } from 'features/App/selectors';
import { selectFavorites } from 'features/Favorites/selectors';
import UserDropdownMenu from './UserDropdownMenu';
import logoPng from 'img/logo.png';

import {
  Wrapper,
  LeftSide,
  Logo,
  Burger,
  SearchWrapper,
  BtnSearch,
  RightSide,
  BtnOrders,
  BtnFavorites,
  BtnNotifications,
  BtnCart,
} from './styled';

const Header: React.FC = () => {
  // const location = useLocation()

  const isLogged = useSelector(selectIsLogged);
  const favorites = useSelector(selectFavorites);

  const [searchInput, setSearchInput] = useState<string>('');

  const changeSearchInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInput(e.target.value);
    },
    []
  );

  // if (
  //   location.pathname.includes(paths.login)
  //   || location.pathname.includes(paths.register)
  //   || location.pathname.includes(paths.requestPasswordRecovery)
  //   || location.pathname.includes(paths.confirmPasswordRecovery)
  // ) return null

  return (
    <Wrapper>
      <LeftSide>
        <Link to={paths.home}>
          <Logo src={logoPng} />
        </Link>

        <Button>
          <Burger>
            <div />
            <div />
            <div />
          </Burger>

          <span>Catalog</span>
        </Button>
      </LeftSide>

      <SearchWrapper>
        <Input
          value={searchInput}
          onChange={changeSearchInput}
          isGhost
          placeholder="Search"
        />

        <BtnSearch />
      </SearchWrapper>

      <RightSide>
        {isLogged ? (
          <>
            <BtnOrders />
            <BtnFavorites count={favorites.length} />
            <BtnNotifications />
            <BtnCart />
            <UserDropdownMenu />
          </>
        ) : (
          <Link to={paths.login}>&nbsp;&nbsp;&nbsp; Log in</Link>
        )}
      </RightSide>
    </Wrapper>
  );
};

export default Header;
