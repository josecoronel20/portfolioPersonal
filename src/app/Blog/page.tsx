"use client";

import FeaturedPosts from "./blogComponents/FeaturedPosts";
import AllPosts from "./blogComponents/AllPosts";
import CallToAction from "./blogComponents/CallToAction";
import { useLanguageStore } from "@/store/useLanguageStore";
import { blogPost } from "@/types/types";

export default function BlogPosts(): JSX.Element {
  const { textLanguage } = useLanguageStore();
  const blogPosts: blogPost[] = textLanguage.blogPage.posts;

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-color-to-b text-white pt-16">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
            {textLanguage.blogPage.title}
          </h1>
          <p className="text-lg md:text-xl text-cyan-100/90 leading-relaxed max-w-3xl mx-auto font-light">
            {textLanguage.blogPage.subtitle}
          </p>
        </header>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <FeaturedPosts featuredPosts={featuredPosts as blogPost[]} />
        )}

        {/* All Posts */}
        <AllPosts regularPosts={blogPosts as blogPost[]} />

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
}
