"use client";

import Link from "next/link";

export function FooterComponent() {
  return (
    <footer className="bg-[#080808] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h2 className="font-semibold mb-4 text-white">Our Research</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Publications
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Case Studies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4 text-white">Our Research</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Methodology
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Findings
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Future Directions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4 text-white">Security</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Data Protection
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Compliance
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white mb-4">Our Research</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Team
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Partnerships
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Funding
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white mb-4">Our Research</h2>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Impact
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-100 hover:text-gray-300">
                Ethics
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
