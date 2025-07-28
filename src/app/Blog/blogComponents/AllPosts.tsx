import { BookOpen } from "lucide-react";
import CardPost from "./CardPost";

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

const AllPosts = ({ regularPosts }: { regularPosts: post[] }): JSX.Element => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300 flex items-center">
        <BookOpen className="w-6 h-6 mr-3" />
        Todos los Artículos
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default AllPosts;
