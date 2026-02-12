import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, LogoutBtn, Button } from "./index";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Login", href: "/login", active: !authStatus },
    { name: "Sign Up", href: "/signup", active: !authStatus },
    { name: "All Posts", href: "/all-posts", active: authStatus },
    { name: "Add Post", href: "/add-post", active: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-sky-600 hover:text-sky-700"
          >
            Bblog
          </Link>

          {/* Navigation */}
          <ul className="flex items-center gap-2">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Button
                      onClick={() => navigate(item.href)}
                      bgColor="bg-transparent"
                      textColor="text-gray-700"
                      className="hover:bg-sky-50 hover:text-sky-600"
                    >
                      {item.name}
                    </Button>
                  </li>
                )
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
