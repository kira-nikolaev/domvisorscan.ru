import Footer from "@/components/Footer";

export default function FooterTestPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Spacer to push footer down */}
      <div className="flex-grow flex items-center justify-center">
        <p className="text-gray-500 text-lg">Footer Test Page</p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
