"use client";

import { useState } from "react";

export default function SubMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">

      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-100 transition">
        Opciones
        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ˅
        </span>
      </button>

      {/* Menú */}
      <div
        className={`
          absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg
          transition-all duration-200 origin-top
          ${open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
        `}
      >
        <ul className="py-2 text-sm">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Opción 1
          </li>

          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Opción 2
          </li>

          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Opción 3
          </li>
        </ul>
      </div>
    </div>
  );
}
