import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const profiles = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Sam Wilson" },
  ];

  return (
    <main className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
      <p className="text-gray-700 mb-4">
        Click on a profile to view details.
      </p>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="mb-2">
            <Link
              to={`/profile/${profile.id}`}
              className="text-blue-500 underline"
            >
              {profile.name}'s Profile
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
