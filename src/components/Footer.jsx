import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-between">
      {/* Services Section */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h6 className="text-lg font-semibold mb-4">Services</h6>
        <ul>
          <li><a href="#" className="hover:text-gray-400">Branding</a></li>
          <li><a href="#" className="hover:text-gray-400">Design</a></li>
          <li><a href="#" className="hover:text-gray-400">Marketing</a></li>
          <li><a href="#" className="hover:text-gray-400">Advertisement</a></li>
        </ul>
      </div>

      {/* Company Section */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h6 className="text-lg font-semibold mb-4">Company</h6>
        <ul>
          <li><a href="#" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          <li><a href="#" className="hover:text-gray-400">Jobs</a></li>
          <li><a href="#" className="hover:text-gray-400">Press Kit</a></li>
        </ul>
      </div>

      {/* Legal Section */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h6 className="text-lg font-semibold mb-4">Legal</h6>
        <ul>
          <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
          <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="text-center mt-8">
      <p className="text-sm text-gray-400">© 2024 Your Company. All rights reserved.</p>
    </div>
  </div>
</footer>

    );
};

export default Footer;