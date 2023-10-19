import { Container } from '@mui/material';
import AddContact from './AddContact/AddContact';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { NavLink, Route, Routes } from 'react-router-dom';
import RegisterView from './Registration/RegisterView';
import LoginView from './Login/LoginView';
import { useSelector } from 'react-redux';
import UserMenu from './Header/UserMenu';
import AuthNav from './Header/AuthNav';

const App = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Container>
      <NavLink to="/contacts">Contacts</NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Routes>
        <Route path="/" element={<div>Welcome</div>} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/registration" element={<RegisterView />} />
        <Route
          path="/contacts"
          element={
            <>
              <AddContact />
              <Filter />
              <ContactList />
            </>
          }
        />
      </Routes>
    </Container>
  );
};

export default App;
