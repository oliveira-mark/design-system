import { useState } from "react";
import { Button } from "../../core/Button/Button";
import logoDefault from "/assets/img/logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./Navbar.css";

type User = {
  name: string;
};

type Links = {
  active?: boolean;
  label: string;
  url: string;
};

export interface NavbarProps {
  links: Links[];
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Navbar = ({
  links,
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="menu-links">
          <a href="" className="navbar-brand">
            <img src={logoDefault} alt="Logotype Default" />
            <h6>Logotype</h6>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Bars3Icon />
          </button>

          <ul className={`navbar-links ${menuOpen ? "open-menu" : ""}`}>
            <button
              className="menu-toggle-close"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <XMarkIcon />
            </button>
            {links.map((link, index) => (
              <li key={index} className="navbar-link">
                <a className={link.active ? "active-link" : ""} href={link.url}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-cta">
          {user ? (
            <>
              <h6>
                Welcome, <b>{user.name}</b>!
              </h6>
              <Button
                primary="filled"
                size="extra-small"
                onClick={onLogout}
                label="Log out"
              />
            </>
          ) : (
            <>
              <Button
                primary="outline"
                size="extra-small"
                onClick={onCreateAccount}
                label="Sign up"
              />
              <Button
                primary="filled"
                size="extra-small"
                onClick={onLogin}
                label="Log in"
              />
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
