import React from 'react';


const Contact = () => {
  return (
    <div className="text-center bg-silver py-12 md:py-20 px-4">
      {/* Heading Section */}
      <div className="heading mb-8">
        <h2 className="font-bold text-2xl md:text-3xl mb-4">Join Our Mailing List</h2>
        <p className="text-gray-600">
          Sign up to receive inspiration, product updates, and special offers from our team.
        </p>
      </div>

      {/* Form Section */}
      <div className="form max-w-md mx-auto flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="example@email.com"
          className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="w-full md:w-1/3 text-white bg-blue px-8 py-3 font-bold rounded-lg hover:bg-dark-blue transition-colors duration-300"
          
        >Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;