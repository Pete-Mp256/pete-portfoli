import ThemeToggle from "./ThemeToggle"
import { Button } from "@/app/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-muted/80 border-b">
    <div className="flex items-center justify-between px-8 py-4 border-b bg-muted sticky top-0 z-10">
      <h1 className="font-bold text-xl">Pete Njagi</h1>

      <div className="flex gap-4">
        <a href="#projects" className="scroll-smooth text-sm text-gray-600 hover:text-blue-600 transition duration-300">
          Projects
        </a>
        <a href="#contact" className="scroll-smooth text-sm text-gray-600 hover:text-blue-600 transition duration-300">
          Contact
        </a>

         <a href="/PETE NJAGI MBITHI.pdf" download>
          <Button size="sm">Download CV</Button>
        </a>

        <ThemeToggle />

        
      </div>
      </div>
    </nav>
  );
}