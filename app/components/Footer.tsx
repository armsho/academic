export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-400 py-1 mt-1">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Arman Shokrollahi. All rights reserved.</p>
      </div>
    </footer>
  );
}

