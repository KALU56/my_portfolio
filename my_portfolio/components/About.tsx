import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our e-learning platform! Our mission is to make quality education accessible to everyone,
        anywhere. Whether you're a student or instructor, we support your journey.
      </p>
      <p className="text-lg mb-4">
        Our platform includes diverse courses, certification, interactive learning, and progress tracking.
      </p>
      <p className="text-lg mb-8">
        Thank you for being a part of our community. Let’s grow together.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
      <div className="flex gap-5">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <Facebook className="w-6 h-6 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 hover:text-blue-700 transition-colors" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
        </a>
        <a href="mailto:support@example.com" aria-label="Email">
          <Mail className="w-6 h-6 hover:text-red-500 transition-colors" />
        </a>
      </div>
    </main>
  );
}
