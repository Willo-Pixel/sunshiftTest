import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { UserListTypes } from './types';

import { getUserData } from './services/services';

import Table from 'react-bootstrap/Table';
import TableBody from './components/TableBody';

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
        <Table striped={true} bordered={true} hover={true} variant="dark">
          <thead>
            <tr>
              <th>Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userList.map( (user:UserListTypes, index:number) => 
             <TableBody
                key={`${user.id.value}${index}`}
                user={user}
                index={index}
              />
            )}
          </tbody>
        </Table>
    </div>
  );
}

export default App;
