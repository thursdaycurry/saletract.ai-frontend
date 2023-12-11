import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginRight: 'auto',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
        }}
        to={'/'}
      >
        <Typography
          sx={{
            display: {
              md: 'block',
              sm: 'block',
              xs: 'none',
            },
            mr: 'auto',
            color: 'black',
            fontWeight: '200',
          }}
        >
          <span style={{ fontSize: '15px' }}>saletract.ai</span>
        </Typography>
      </Link>
    </div>
  );
};
export default Logo;
