import React, { useEffect, useState } from 'react';
import { useGetAllUserQuery } from '../../redux/api/adminApi';


const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', number: '123-456-7890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', number: '987-654-3210' },
  
];

const Users = () => {
//   const [users, setUsers] = useState([]);
const {data:users,isError,isSuccess} = useGetAllUserQuery()


  useEffect(() => {
    
    // setUsers(dummyUsers);
  }, []);

  const handleDelete = (userId) => {
    
    // setUsers(users.filter(user => user.id !== userId));
  };

  const handleViewDetails = (userId) => {
    
    console.log(`View details for user ${userId}`);
  };
  const filteredData = users && users.filter(item => item.name.toLowerCase() !== 'admin') || []
  return (
    <div className="container mx-auto mt-5">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredData && filteredData.map((item,index) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.number}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleViewDetails(item._id)}
                >
                  View Resume
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
