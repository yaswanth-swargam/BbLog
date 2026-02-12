import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="flex flex-col justify-between">
            <div className="mb-4">
              <p>Bblog</p>
            </div>
            <p className="text-sm text-gray-400">
              © DevUI. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Company
            </h3>
            <ul className="space-y-4">
              {["Features", "Pricing", "Affiliate Program", "Press Kit"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Support
            </h3>
            <ul className="space-y-4">
              {["Account", "Help", "Contact Us", "Customer Support"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Legal
            </h3>
            <ul className="space-y-4">
              {["Terms & Conditions", "Privacy Policy", "Licensing"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
