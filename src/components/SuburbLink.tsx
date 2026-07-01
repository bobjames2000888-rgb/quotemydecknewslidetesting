import { Link, useLocation } from "react-router-dom";
import { MapPin } from "lucide-react";

interface SuburbLinkProps {
  suburb: string;
  cityPath: string;
}

const SuburbLink = ({ suburb, cityPath }: SuburbLinkProps) => {
  const { pathname } = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If already on the target city route, React Router won't change pathname,
    // so we manually scroll to top and avoid a redundant navigation.
    if (pathname === cityPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      to={cityPath}
      onClick={handleClick}
      className="flex items-center space-x-2 p-4 rounded-lg border border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground hover-scale transition-smooth bg-card cursor-pointer group"
    >
      <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground flex-shrink-0" />
      <span className="text-foreground font-medium group-hover:text-primary-foreground">{suburb}</span>
    </Link>
  );
};

export default SuburbLink;
