import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <img src={logo} alt="Ekatvam Cowork" className="h-12 w-auto" />
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Ekatvam Cowork. Connect | Create | CoGrow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
