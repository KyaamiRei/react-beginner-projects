import { useEffect, useState } from 'react';

import axios from 'axios';

import { Success } from './components/Success';
import { Users } from './components/Users';

import './index.scss';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([]);
  const [addUsers, setAddUsers] = useState([]);
  const [successAdd, setSuccessAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickAddUser = (userId) => {
    if (addUsers.includes(userId)) {
      setAddUsers((prev) => prev.filter((_id) => _id !== userId));
    } else {
      setAddUsers((prev) => [...prev, userId]);
    }
    console.log(addUsers);
  };

  const onClickInvite = () => {
    setSuccessAdd(true)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const usersList = await axios.get('https://reqres.in/api/users');
        setUsers(usersList.data.data);

        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе пользователей');
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='App'>
      {successAdd ? (
        <Success count={addUsers.length}/>
      ) : (
        <Users
          usersList={users}
          addedUsers={addUsers.length}
          onAddUser={(id) => onClickAddUser(id)}
          onClickInvite={onClickInvite}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default App;
