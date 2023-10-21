import AddContact from './AddContact/AddContact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { refreshCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from './Header/PrivateRoute';
import PublicRoute from './Header/PublicRoute';
import Home from './Home/Home';
import AuthNav from './Header/AuthNav';
import UserMenu from './Header/UserMenu';
// import LoginView from './Login/LoginView';
// import RegisterView from './Registration/RegisterView';
const LoginView = lazy(() => import('./Login/LoginView'));
const RegisterView = lazy(() => import('./Registration/RegisterView'));

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <header>
          <ul className="nav">
            <li className="nav_item">
              <NavLink to="/">Home</NavLink>
            </li>
            {isLoggedIn && (
              <li className="nav_item">
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
            )}
          </ul>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Suspense>
                <PublicRoute>
                  <LoginView />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/registration"
            element={
              <Suspense>
                <PublicRoute>
                  <RegisterView />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <AddContact />
                <Filter />
                <ContactList />
              </PrivateRoute>
            }
          />
        </Routes>
      </>
    )
  );
};

export default App;
