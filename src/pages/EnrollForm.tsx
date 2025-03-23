import React, { useState } from "react";

const EnrollForm = ({ courseName, onClose }: { courseName: string; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ✅ Here you can send formData to an API or backend
    console.log("Form Submitted:", { ...formData, courseName });

    // Close the popup after submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-900">
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Enroll for {courseName}</h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-2 rounded-md"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border p-2 rounded-md"
          />

          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded-md"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;
