import { Github, Linkedin, Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://github.com/sakthirajan157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sakthi-d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/sakthirajan157"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & Built with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Sakthi D
          </p>
          
          <p className="text-xs text-muted-foreground">
            © {currentYear} Sakthi D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
