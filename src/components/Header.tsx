import { AppBar, Toolbar } from '@mui/material';
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{
        bgcolor: 'transparent',
        position: 'static',
        boxShadow: 'none',
        borderBottom: '1px solid black',
      }}
    >
      <Toolbar sx={{ display: 'flex' }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg='#00fffc'
                to='/chat'
                text='Go to Chat'
                textColor='black'
              />
              <NavigationLink
                bg='#51538f'
                textColor='black'
                to='/'
                text='logout'
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink to='/login' text='Login' textColor='black' />
              <NavigationLink textColor='black' to='/signup' text='Signup' />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
