import React from "react";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <div>
      <ul className="flex justify-between m-10 item-center text-xl">
        <div>
          <Link href="/">Home</Link>
        </div>

        <div className="flex gap-10">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </ul>
    </div>
  );
};

export default NavbarComponent;
