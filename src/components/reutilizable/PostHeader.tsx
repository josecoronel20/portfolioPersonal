import { Badge } from "@/components/ui/badge";
import { Calendar, Code2 } from "lucide-react";
import Image from "next/image";

interface Post {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  likes: number;
  comments: number;
}

const PostHeader = ({ post }: { post: Post }): JSX.Element => {
  return (
    <header className="mb-8">
      <Badge className="bg-cyan-800/40 text-cyan-200 border-cyan-600/50 mb-4">
        <Code2 className="w-4 h-4 mr-1" />
        {post.category}
      </Badge>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
        {post.title}
      </h1>

      <p className="text-lg text-cyan-100/90 leading-relaxed mb-6 font-light">
        {post.excerpt}
      </p>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4 text-cyan-300/70 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Imagen principal */}
      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/30 to-transparent"></div>
      </div>
    </header>
  );
};

export default PostHeader;
