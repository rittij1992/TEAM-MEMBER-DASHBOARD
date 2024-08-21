import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './Layout/DashboardLayout';
import HomePage from './Components/Pages/WelcomePage/Home';
import Directory from './Components/Pages/PeopleDirectory/Directory';
import Data from './DataList';
import { ProfileProvider } from './ContextApi/ProfileContext';
import NewForm from './Components/Form/NewForm';
import PageNotFound from './Components/Pages/PageNotFound';
import EditForm from './Components/Form/EditForm';

function App() {
  return (
    <BrowserRouter>
    <ProfileProvider>
      <Routes>
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='/people' element={<Directory/>}></Route>
          <Route path='/add-people' element={<NewForm/>}></Route>
          <Route path='/edit-people' element={<EditForm/>}></Route>
          <Route path='/*' element={<PageNotFound/>}></Route>
        </Route>
        <Route path='/data' element={<Data/>}></Route>
      </Routes>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;
