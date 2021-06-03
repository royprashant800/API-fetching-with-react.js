import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard'
import Rings from './components/Rings';

const App = () => {
  const [load, setload] = useState(null);
  const [loader, setloader] = useState(null);

  return (
    <>
      <Navbar />

      <div className="main_box">

        <Button
          id="user_btn"
          variant="contained"
          color="secondary"
          onClick={() => {
            setload(<UserCard />);
            setloader(<Rings />)
          }}  >Get Users</Button>

      </div>

      <div>{loader}</div>
      <div> {load} </div>
    </>
  )
}

export default App;









































































































































{/* <UserCard
        user_id={User_arr[0].data[0].id}
        user_email={User_arr[0].data[0].email}
        first_name={User_arr[0].data[0].first_name}
        avatar={User_arr[0].data[0].avatar} /> */}
{/* <UserCard
        user_id={User_arr[1].id}
        user_email={User_arr[1].email}
        first_name={User_arr[1].first_name}
        avatar={User_arr[1].avatar} /> */}
{/* <UserCard
        user_id={User_arr[2].data[2].id}
        user_email={User_arr[2].data[2].email}
        first_name={User_arr[2].data[2].first_name}
        avatar={User_arr[2].data[2].avatar} />
      <UserCard
        user_id={User_arr[3].data[3].id}
        user_email={User_arr[3].data[3].email}
        first_name={User_arr[3].data[3].first_name}
        avatar={User_arr[3].data[3].avatar} />
      <UserCard
        user_id={User_arr[4].data[4].id}
        user_email={User_arr[4].data[4].email}
        first_name={User_arr[4].data[4].first_name}
        avatar={User_arr[4].data[4].avatar} />
      <UserCard
        user_id={User_arr[5].data[5].id}
        user_email={User_arr[5].data[5].email}
        first_name={User_arr[5].data[5].first_name}
        avatar={User_arr[5].data[5].avatar} /> */}