import React from "react";
import { useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";


const More = () => {
  const getRef = useRef(0);

  useEffect(() => {
    document.title = `More`;
  }, [getRef.current]);
  return (
    <>
      <header className="flex gap-6 justify-center mt-4 mb-6">
        <p>
          <Link to="/products" className="no-underline text-gray-700 bg-[#a0c52a] px-3 py-2 rounded-sm sm:text-lg text-sm">BIRDS</Link>
        </p>
        <p>
          <Link to="/products/seafood" className="no-underline text-gray-700 bg-[#a0c52a] px-3 py-2 rounded-sm sm:text-lg text-sm">SEA FOODS</Link>
        </p>
        <p>
          <Link to="/products/livestock" className="no-underline text-gray-700 bg-[#a0c52a] px-3 py-2 rounded-sm sm:text-lg text-sm">LIVESTOCKS</Link>
        </p>
      </header>
      <main>
        <Outlet />
      </main>
      
    </>
  );
};

export default More;
