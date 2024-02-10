import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'https://randomuser.me/api/?page=1&results=1&seed=abc'
        );
        console.log(response)
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
    {user && (
      <div className="flex max-w-4xl bg-white rounded-md overflow-hidden shadow-lg p-10">
        <div className="mr-6">
          <img
            src={user.picture.large}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-2 text-center">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 mb-2 text-center">{user.gender}</p>
          <p className="text-gray-600 mb-2 text-center">{user.phone}</p>
        </div>
      </div>
    )}
  </div>
  );
}

export default App;

