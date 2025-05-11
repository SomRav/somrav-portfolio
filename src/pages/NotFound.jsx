import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center h-screen">
        <p className="text-4xl font-bold opacity-0 animate-fade-in">
          404 - Page Not Found :( <br />
          <span className="text-muted-foreground text-2xl" href="/">
            Take me{" "}
            <a href="/" className=" underline">
              home
            </a>
          </span>
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
