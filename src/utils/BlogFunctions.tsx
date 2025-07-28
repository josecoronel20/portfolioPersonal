import { Code2, Layers, Shield, Database, Zap, BookOpen } from "lucide-react";

export const getCategoryIcon = (category: string): JSX.Element => {
  switch (category) {
  case "React":
    return <Code2 className="w-4 h-4" />;
  case "Estado Global":
    return <Layers className="w-4 h-4" />;
  case "Testing":
    return <Shield className="w-4 h-4" />;
  case "Seguridad":
    return <Shield className="w-4 h-4" />;
  case "Backend":
    return <Database className="w-4 h-4" />;
  case "DevOps":
    return <Zap className="w-4 h-4" />;
  default:
    return <BookOpen className="w-4 h-4" />;
  }
};

export const getCategoryColor = (category: string): string => {
  switch (category) {
  case "React":
    return "bg-cyan-800/40 text-cyan-200 border-cyan-600/50";
  case "Estado Global":
    return "bg-cyan-800/40 text-cyan-200 border-cyan-600/50";
  case "Testing":
    return "bg-cyan-800/40 text-cyan-200 border-cyan-600/50";
  case "Seguridad":
    return "bg-cyan-800/40 text-cyan-200 border-cyan-600/50";
  case "Backend":
    return "bg-cyan-800/40 text-cyan-200 border-cyan-600/50";
  case "DevOps":
    return "bg-cyan-800/40 text-cyan-200 border-cyan-600/50";
  default:
    return "bg-cyan-800/40 text-cyan-200 border-cyan-600/50";
  }
};
