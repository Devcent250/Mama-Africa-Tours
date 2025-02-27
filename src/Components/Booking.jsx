import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const Booking = ({ selectedTourFromParent }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [selectedTour, setSelectedTour] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [attendeeCategory, setAttendeeCategory] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [disableTourSelection, setDisableTourSelection] = useState(false);

  const tours = [
    'Akagera National Park Safaris',
    'Mountain Gorilla Expeditions',
    'Nyungwe Forest Adventures',
    'Guided Birding Tours',
    'Historical Sites Tour',
    'Gastronomic Experience',
  ];

  const attendeeCategories = ['Single', 'Couple', 'Family'];

  const attendeeCategoryPrices = {
    Single: 100,
    Couple: 180,
    Family: 250,
  };

  const location = useLocation();

  useEffect(() => {
    const tourFromState = location.state?.selectedTour;
    if (tourFromState) {
      setSelectedTour(tourFromState);
      setDisableTourSelection(true);
    } else if (selectedTourFromParent) {
      setSelectedTour(selectedTourFromParent);
      setDisableTourSelection(true);
    }
  }, [location.state, selectedTourFromParent]);

  useEffect(() => {
    if (attendeeCategory) {
      setTotalAmount(attendeeCategoryPrices[attendeeCategory]);
    }
  }, [attendeeCategory]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_mamafricatours',
        'template_i59a0yi',
        form.current,
        'pD8uv7c2Q7s5NzZ4E'
      )
      .then(
        () => {
          setLoading(false);
          setEmailSent(true);
          setShowSuccessDialog(true);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        },
        (error) => {
          setLoading(false);
          console.error('FAILED ...', error.text);
        }
      );
  };

  const handleCloseDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200 py-12 px-4 font-Coolvetica">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        </div>
      )}

      {showSuccessDialog && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-green-500 mb-4">Thank you!</h2>
            <p className="text-gray-700">Your booking request has been sent successfully.</p>
            <button
              className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseDialog}
            >
              <CloseIcon />
            </button>
          </div>
        </motion.div>
      )}

      <motion.div
        className="bg-white shadow-md rounded-lg w-full p-6 lg:w-1/2 mt-32 font-Coolvetica"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {!emailSent ? (
          <form ref={form} onSubmit={sendEmail} className="space-y-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Contact <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Booking Period <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  name="start_date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="date"
                  name="end_date"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </form>
        ) : null}
      </motion.div>
    </div>
  );
};

export default Booking;
