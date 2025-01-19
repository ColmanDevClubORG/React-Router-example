import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  // Simulate fetching profile data
  const profiles = {
    1: { name: "John Doe", bio: "Web Developer from NY." },
    2: { name: "Jane Smith", bio: "Graphic Designer from LA." },
    3: { name: "Sam Wilson", bio: "Photographer from TX." },
  };

  const profile = profiles[id];

  if (!profile) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-red-500">Profile Not Found</h1>
      </div>
    );
  }

  return (
    <main className="text-center mt-10">
      <h1 className="text-3xl font-bold">{profile.name}</h1>
      <p className="text-gray-700 mt-4">{profile.bio}</p>
      <p className="mt-6">
        <a href="/" className="text-blue-500 underline">
          Back to Home
        </a>
      </p>
    </main>
  );
};

export default Profile;
