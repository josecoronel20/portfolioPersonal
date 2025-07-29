"use client";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { useLanguageStore } from "@/store/useLanguageStore";
import { blogPost } from "@/types/types";

const BlogSection = (): JSX.Element => {
  const { textLanguage } = useLanguageStore();

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-300">
          <BookOpen className="w-10 h-10 inline mr-4" />
          {textLanguage.homePage.blogSection.title}
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {textLanguage.blogPage.posts.map((post: blogPost, index: number) => (
            <Card
              key={index}
              className="bg-cyan-900/20 border-cyan-700/50 backdrop-blur-sm hover:bg-cyan-900/30 hover:border-cyan-600/70 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-cyan-100 text-lg leading-tight group-hover:text-cyan-200 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-cyan-400 font-medium">
                  {post.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/Blog/${post.id}`}
                  className="text-cyan-300/80 hover:text-cyan-300 transition-colors flex items-center font-medium"
                >
                  {textLanguage.homePage.blogSection.cta}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
