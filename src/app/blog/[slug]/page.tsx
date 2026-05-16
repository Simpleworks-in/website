import Link from "next/link";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import { notFound } from "next/navigation";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../../keystatic.config";
import type { Metadata } from "next";

const reader = () => createReader(process.cwd(), keystaticConfig);

const formatDate = (iso: string | null) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

export async function generateStaticParams() {
  const posts = await reader().collections.posts.list();
  return posts.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await reader().collections.posts.read(slug);
  if (!post) return { title: "Post not found" };

  const title = post.seoTitle?.trim() || post.title;
  const description = post.seoDescription?.trim() || post.excerpt;

  return {
    title: { absolute: `${title} | Simpleworks Blog` },
    description,
    openGraph: { title, description, type: "article" },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await reader().collections.posts.read(slug);
  if (!post) notFound();

  const { node } = await post.content();
  const renderable = Markdoc.transform(node);

  return (
    <article className="mx-auto max-w-prose-col px-6 py-20 md:px-0 md:py-24">
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-2 text-[12px] uppercase tracking-wide-4 text-light transition-colors hover:text-red"
      >
        ← Back to all posts
      </Link>
      <p className="text-eyebrow font-bold uppercase tracking-wide-9 text-red">
        {post.category}
      </p>
      <h1 className="mt-4 text-[44px] font-bold leading-[1.12] tracking-tight-2 md:text-[52px]">
        {post.title}
      </h1>
      <p className="mt-5 text-[14px] italic text-light">
        {formatDate(post.date)}
      </p>
      <div className="mt-6 h-[2px] w-10 bg-red" />
      <div className="prose-post mt-12 font-serif text-[17px] leading-[1.78] text-ink">
        {Markdoc.renderers.react(renderable, React)}
      </div>
      <div className="mt-20 border-t border-rule pt-8">
        <Link
          href="/blog"
          className="text-[14px] tracking-wide-3 text-red transition-colors hover:text-ink"
        >
          ← More posts
        </Link>
      </div>
    </article>
  );
}
