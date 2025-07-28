import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { getCategoryColor, getCategoryIcon } from "@/utils/BlogFunctions";

interface post {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  tags: string[];
  image: string;
}

const CardPost = ({ post }: { post: post }): JSX.Element => {
  return (
    <Card
      key={post.id}
      className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 hover:border-cyan-600/70 transition-all duration-300 group overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/90 to-transparent"></div>
        <Badge
          className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}
        >
          {getCategoryIcon(post.category)}
          <span className="ml-1">{post.category}</span>
        </Badge>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-cyan-100 text-xl group-hover:text-cyan-200 transition-colors leading-tight">
          {post.title}
        </CardTitle>
        <div className="flex items-center gap-4 text-cyan-300/70 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-cyan-200/80 text-sm leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-cyan-600/50 text-cyan-200 bg-cyan-800/20 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition-all duration-300 group">
          Leer artículo
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardPost;
