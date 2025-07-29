"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import PostHeader from "../../../components/reutilizable/PostHeader";
import PostSection from "./blogPostDetailComponents/CardSection";
import { useParams } from "next/navigation";
import { useLanguageStore } from "@/store/useLanguageStore";
import { blogPost } from "@/types/types";

interface ContentSection {
  h2?: string;
  p?: string;
}

export default function BlogPostDetail(): JSX.Element {
  const { id } = useParams();
  const { textLanguage } = useLanguageStore();
  const post = textLanguage.blogPage.posts.find(
    (post: blogPost) => post.id === Number(id),
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-color-to-b text-white pt-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navegación simple */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-cyan-300/70">
            <Link
              href="/Blog"
              className="hover:text-cyan-300 transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-cyan-200">{post.category}</span>
          </div>

          <Link href="/Blog">
            <Button
              variant="ghost"
              size="sm"
              className="text-cyan-300 hover:text-cyan-200 hover:bg-cyan-900/20 p-0"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {textLanguage.blogPage.reutilizableText.cta.back}
            </Button>
          </Link>
        </nav>

        {/* PostHeader component */}
        <PostHeader post={post} />

        {/* Main content */}
        <main className="flex flex-col gap-8">
          <article className="space-y-6">
            {post.content.map((section, index) => {
              const contentSection = section as ContentSection;
              return (
                <PostSection key={index}>
                  {contentSection.h2 && (
                    <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                      {contentSection.h2}
                    </h2>
                  )}
                  {contentSection.p && (
                    <p className="text-cyan-200/90 leading-relaxed text-base">
                      {contentSection.p}
                    </p>
                  )}
                </PostSection>
              );
            })}
          </article>

          {/* Call to action simple */}
          <PostSection>
            <p className="text-cyan-200/80 text-sm leading-relaxed text-center">
              {textLanguage.blogPage.callToAction.subtitle}
            </p>

            <div className="flex justify-center w-full pt-4">
              <Link href={textLanguage.contactInfo.email} target="_blank">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 font-medium transition-all duration-300">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {textLanguage.blogPage.callToAction.cta}
                </Button>
              </Link>
            </div>
          </PostSection>
        </main>
      </div>
    </div>
  );
}
