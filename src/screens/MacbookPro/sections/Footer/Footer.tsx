import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
} from 'react-icons/fa';

const FacebookIcon = FaFacebookF as unknown as React.FC;
const InstagramIcon = FaInstagram as unknown as React.FC;
const TwitterIcon = FaTwitter as unknown as React.FC;
const GooglePlusIcon = FaGooglePlusG as unknown as React.FC;
const YoutubeIcon = FaYoutube as unknown as React.FC;

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white shadow-lg">
      <div className="flex flex-col items-center justify-center py-6 space-y-4">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:scale-110 transition cursor-pointer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:scale-110 transition cursor-pointer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:scale-110 transition cursor-pointer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://plus.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:scale-110 transition cursor-pointer"
            aria-label="Google Plus"
          >
            <GooglePlusIcon />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:scale-110 transition cursor-pointer"
            aria-label="YouTube"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-xs border-t border-gray-800">
        Copyright ©2025, Designed by <span className="font-semibold">EImTeC Groupe</span>
      </div>
    </footer>
  );
};

export default Footer;
