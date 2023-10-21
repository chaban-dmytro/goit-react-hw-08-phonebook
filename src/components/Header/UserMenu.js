import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';
import { Button } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  return (
    <div className="user-menu__items">
      <span>Welcome, {name} </span>
      <Button
        type="button"
        variant="contained"
        onClick={() => dispatch(logout())}
      >
        Log out
      </Button>
    </div>
  );
}
