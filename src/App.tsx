import React, { useEffect, useState } from 'react';
import './App.css';
import { getUserData } from './services/services';
import { UserListTypes } from './types';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userList, setUserList] = useState<UserListTypes[]>([])

  useEffect(() => {
    (async() => {
        const response = await getUserData();
        const relevantData = response.results.map(
           (user:any) => ({
            image: user.picture.thumbnail,
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            phone: user.phone,
            id: user.id,
            location: {
              street: user.location.street,
              city: user.location.city,
              state: user.location.state,
              country: user.location.country,
              postcode: user.location.postcode
            }
          })
           )
        setUserList(relevantData)
    })();
  },[])

  return (
    <div>
        <Table striped={false} bordered={true} hover={true} variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {(userList.map( (user:UserListTypes, index:number) => 
                <tr>
                  <td>{index}</td>
                  <td><img src={user.image} alt='profile'></img></td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default App;
