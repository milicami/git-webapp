import React from 'react';
import './App.css';
// import {usersData} from '../data/UserData'
// import {UserList} from './users/UserList'
import { Header } from './partials/Header'
import { UserGrid } from './users/UserGrid'
import { Footer } from './partials/Footer'
import { getUsers } from './../services/usersService'

const App = (props) => {

  const users = getUsers();
  console.log(users);


  return (
    <React.Fragment>
      <Header />
      <UserGrid myUsers={users} />
      <Footer />
    </React.Fragment>
  );
}

export { App };
