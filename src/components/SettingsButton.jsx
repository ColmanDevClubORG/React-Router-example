import React from "react";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SettingsButton = () => {
  const navigate = useNavigate();

  const navigateToSettings = () => {
    navigate("/settings");
  };

  return (
    <button
      onClick={() => navigateToSettings()}
      className="fixed bottom-4 right-4 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all"
    >
      <FiSettings size={24} />
    </button>
  );
};

export default SettingsButton;
