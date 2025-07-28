import { Zap } from "lucide-react";
import React from "react";
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

const FeaturedPosts = ({
  featuredPosts,
}: {
  featuredPosts: post[];
}): JSX.Element => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300 flex items-center">
        <Zap className="w-6 h-6 mr-3" />
        Posts Destacados
      </h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {featuredPosts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
