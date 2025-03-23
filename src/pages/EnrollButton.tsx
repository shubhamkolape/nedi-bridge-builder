import React, { useState } from "react";
import EnrollForm from "./EnrollForm"; // Import the form popup

const EnrollButton = ({ courseName }: { courseName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Enroll Now
      </button>

      {isOpen && <EnrollForm courseName={courseName} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default EnrollButton;
