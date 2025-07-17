import React from "react";
import personalLogo from "../../assets/PersonalLogo.png"; // Your black logo
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { MdEmail, MdPhone, MdWeb } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="max-w-fit mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img
                  src={personalLogo}
                  alt="Mohamed Gaber Logo"
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Mohamed El-said Gaber</h2>
                <p className="text-orange-500 text-sm font-medium">Front-End Developer</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm text-center md:text-left max-w-xs">
              Crafting pixel-perfect, responsive web experiences with modern technologies.
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
              <MdWeb className="text-orange-500" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MdEmail className="text-orange-500" />
                <a
                  href="mailto:mg3845617@gmail.com"
                  className="hover:text-orange-500 transition-colors"
                >
                  mg3845617@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="text-orange-500" />
                <a
                  href="tel:+201125992923"
                  className="hover:text-orange-500 transition-colors"
                >
                  +20 112 599 2923
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
              <FaCode className="text-orange-500" />
              Connect
            </h3>
            <div className="flex gap-5">
              <a
                href="https://linkedin.com/in/mohamed-gaber-ba8312207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/mgaber189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>Let's build something amazing together</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mohamed El-said Gaber. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;