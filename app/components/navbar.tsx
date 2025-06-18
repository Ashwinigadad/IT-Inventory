"use client";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="w-full flex justify-center gap-10 py-6 text-white text-lg font-medium">
      {navLinks.map((item, index) => (
        <a key={index} href={item.href} className="hover:underline">
          {item.name}
        </a>
      ))}
    </nav>
  );
}
