import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, Phone } from "lucide-react"; // Added Phone icon import
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom"; // Corrected import for useNavigate
import Modal from "../components/Modal"; // Import the Modal component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility
  const [copied, setCopied] = useState(false); // State for showing the "Number Copied" message
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 }); // Track mouse position for the tooltip
  const navigate = useNavigate(); // Proper usage of useNavigate

  const phoneNumber = "+98 9337563511"; // Replace with your actual phone number

  const handleCopyPhone = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      // Get mouse position for tooltip
      setTooltipPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setCopied(false); // Hide the tooltip after 2 seconds
      }, 2000);
    }).catch((error) => {
      alert("Failed to copy phone number!");
      console.error(error);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = "service_cl30z9b";
    const templateID = "template_c80nkd9";
    const userID = "4SMGHBn000hrVRFQU";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "mjgholizade.iftp@gmail.com", // Your email
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setShowModal(true); // Show the modal on success
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide modal
    setTimeout(() => {
      navigate("/"); // Redirect to the home page after modal closes
    }, 500); // Adjust the delay to match your design
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <a
                    href="mailto:mjgholizade.iftp@gmail.com"
                    className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
                  >
                    <Mail className="h-6 w-6" />
                    <span>Email</span>
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://linkedin.com/in/mohamad-javad-gholizade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://github.com/MohamadJavadGholizade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-500 hover:text-purple-400 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                    <span>GitHub</span>
                  </a>
                </div>
                {/* Added Phone Section */}
                <div
                  className="flex items-center space-x-4 cursor-pointer"
                  onClick={handleCopyPhone}
                >
                  <Phone className="h-6 w-6 text-purple-500" />
                  <span className="text-purple-500">{phoneNumber}</span> {/* Changed to purple */}
                </div>
                {copied && (
                  <div
                    className="absolute text-sm bg-purple-500 text-white px-2 py-1 rounded-lg"
                    style={{
                      left: tooltipPosition.x + 10 + 'px',
                      top: tooltipPosition.y + 10 + 'px',
                      zIndex: 9999
                    }}
                  >
                    <span className="font-semibold">Phone Number Copied!</span> {/* Enhanced text */}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Show the modal when the form is successfully submitted */}
      {showModal && <Modal message="Message sent successfully!" onClose={handleCloseModal} />}
    </div>
  );
};

export default Contact;
