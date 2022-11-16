import { useState } from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({ addedUsers, usersList, isLoading, onAddUser, onClickInvite }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className='search'>
        <svg
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
        </svg>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type='text'
          placeholder='Найти пользователя...'
        />
      </div>
      {isLoading ? (
        <div className='skeleton-list'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className='users-list'>
          {usersList
            .filter((user) => {
              const full_name = user.first_name + ' ' + user.last_name;
              return full_name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((user) => (
              <User
                onAddUser={(id) => onAddUser(id)}
                key={user.id}
                {...user}
              />
            ))}
        </ul>
      )}
      {addedUsers > 0 ? (
        <button
          onClick={() => onClickInvite()}
          className='send-invite-btn'>
          Отправить приглашение
        </button>
      ) : null}
    </>
  );
};
