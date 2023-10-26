import React from "react";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
    {
      name: "Services",
      path: "/",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <nav className="flex justify-between items-center mx-auto max-w-5xl py-4 px-6 bg-slate-400">
      <div>Logo container</div>
      <div className="flex justify-center items-center gap-6">
        {navLinks.map((item, i) => (
          <a
            href={item.path}
            key={`navLink-${i}`}
            className="font-medium border-b-2 border-transparent hover:border-black transition ease-in-out delay-100"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
