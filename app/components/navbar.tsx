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
    <div className="w-full bg-[#6C63FF]">
      <nav className="max-w-4xl mx-auto bg-white rounded-b-3xl px-10 py-6 flex justify-center gap-10 text-[#6C63FF] text-lg font-medium shadow-md">
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="hover:underline transition-all"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
