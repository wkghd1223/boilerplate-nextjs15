'use client';

import { FaCheckCircle, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';
import { FRONT_URL_PATH } from '@/lib/constants';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <section>
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Next.js 15 Boilerplate
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This is a starter template for building scalable applications with
          Next.js 15.
        </p>
      </section>
    </main>
  );
}
