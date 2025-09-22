// src/components/layout/Footer.tsx
import { Copyright } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground text-center flex justify-center items-center gap-2">
            <Copyright size={16} />
            <span>
              {new Date().getFullYear()} Seenivasan.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
