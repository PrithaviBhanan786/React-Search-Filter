import React, {useState} from 'react';
import {data} from './data';
import './App.css';

const App=()=>{
  const [search, setSearch]=useState('');
  console.log(search)
  return(
    <div className='container'>
      <h1>Search Filter 🔍</h1>
      <input className='search' type="text" placeholder='🔍Search...' 
      onChange={(event)=>{setSearch(event.target.value)}}/>
      <table>
        <thead>
          <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Emaid</th>
          <th>Gender</th>
          <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((item)=>{
            return search.toLowerCase()===''
            ? item
            :item.first_name.toLowerCase().includes(search);
          }).map((item)=>(
          <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>{item.phone}</td>
          </tr>
))}
        </tbody>
      </table>
      </div>
  );
};

export default App