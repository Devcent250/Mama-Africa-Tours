import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';

const Booking = ({ selectedTourFromParent }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [selectedTour, setSelectedTour] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [attendeeCategory, setAttendeeCategory] = useState('');

  // Sample tours data for dropdown
  const tours = [
    'Akagera National Park Safaris',
    'Mountain Gorilla Expeditions',
    'Nyungwe Forest Adventures',
    'Guided Birding Tours',
    'Historical Sites Tour',
    'Gastronomic Experience',
  ];

  const location = useLocation();

  useEffect(() => {
    // Check if selectedTour is passed through location state
    const tourFromState = location.state?.selectedTour;
    if (tourFromState) {
      setSelectedTour(tourFromState); // Automatically select the tour from state
    } else if (selectedTourFromParent) {
      setSelectedTour(selectedTourFromParent); // Optionally use the parent prop if provided
    }
  }, [location.state, selectedTourFromParent]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_bbqzjtq',
        'template_828oaud',
        form.current,
        'sC3mWIql2tG9q39KF'
      )
      .then(
        () => {
          setLoading(false);
          setEmailSent(true);
          console.log('SUCCESS!');
        },
        (error) => {
          setLoading(false);
          console.log('FAILED ...', error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 font-Coolvetica">
      {/* Loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        </div>
      )}

      {/* Container */}
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        {/* Title outside the form */}
        <h2 className="text-2xl font-bold text-green-600 text-center mt-28 mb-6">
          Book Your Perfect Tour
        </h2>

        {!emailSent ? (
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Full Names <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="ex: Mark Devcent"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)} // Update full name
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="ex: devcent@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="user_contact"
                placeholder="+(250) 788 886 427"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)} // Update contact
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Booking Details */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Booking Period <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                  type="date"
                  name="start_date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)} // Update start date
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="date"
                  name="end_date"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)} // Update end date
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Booking Tour Dropdown */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Which tour are you booking? <span className="text-red-500">*</span>
              </label>
              <select
                name="tour_selection"
                required
                value={selectedTour}
                onChange={(e) => setSelectedTour(e.target.value)} // Update selected tour
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a tour</option>
                {tours.map((tour, index) => (
                  <option key={index} value={tour}>
                    {tour}
                  </option>
                ))}
              </select>
            </div>

            {/* Display Selected Tour */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Selected Tour
              </label>
              <input
                type="text"
                value={selectedTour}
                readOnly
                className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-100"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Attendee Category <span className="text-red-500">*</span>
              </label>
              <select
                name="attendee_category"
                required
                value={attendeeCategory}
                onChange={(e) => setAttendeeCategory(e.target.value)} // Update attendee category
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Rwandan">Rwandan - $50 Per Day</option>
                <option value="Couple">Couple - $90 Per Day</option>
                <option value="Children">Children - $35 Per Day</option>
                <option value="Foreigners">Foreigners - $180 Per Day</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Booking Request
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-500">Thank you!</h2>
            <p className="mt-2 text-gray-700">
              Your booking request has been sent successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
