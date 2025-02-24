'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect when modal opens
  useEffect(() => {
    setIsVisible(true);
  }, []);

  function closeModal() {
    setIsVisible(false);
    setTimeout(() => {
      router.back(); // Go back to the previous page
    }, 200);
  }

  return (
    <div
      className={`z-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-96 transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
}
