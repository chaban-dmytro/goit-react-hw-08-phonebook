import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  return (
    <div>
      <span>Welcome, {name}</span>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
}
