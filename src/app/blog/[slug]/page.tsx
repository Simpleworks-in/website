import Link from "next/link";
import Image from "next/image";
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
    return iso ?? "";
  }
};

/** Rough reading-time estimate: ~200 words per minute. */
function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

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
  const url = `https://www.simpleworks.in/blog/${slug}`;

  return {
    title: { absolute: `${title} | Simpleworks Blog` },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.date ?? undefined,
      authors: ["Premraj Menon"],
    },
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

  // Plain-text version for reading-time estimate
  const plainText = Markdoc.renderers.html(renderable).replace(/<[^>]+>/g, " ");
  const mins = readingTime(plainText);

  const url = `https://www.simpleworks.in/blog/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Person",
      name: "Premraj Menon",
      url: "https://www.simpleworks.in/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Simpleworks Consulting",
      url: "https://www.simpleworks.in",
    },
    datePublished: post.date ?? undefined,
    dateModified: post.date ?? undefined,
    url,
    description: post.seoDescription?.trim() || post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <article className="mx-auto max-w-prose-col px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Back link */}
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-2 text-[12px] uppercase tracking-wide-4 text-light transition-colors hover:text-red"
      >
        ← Back to all posts
      </Link>

      {/* Post header */}
      <header className="mb-12">
        <span className="inline-block bg-red px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide-4 text-white">
          {post.category}
        </span>
        <h1 className="mt-5 text-[38px] font-bold leading-[1.12] tracking-tight-2 md:text-[48px]">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-4 text-[17px] italic leading-[1.65] text-mid">
            {post.excerpt}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-light">
          <span>Premraj Menon</span>
          <span className="text-rule">·</span>
          <span>{formatDate(post.date)}</span>
          <span className="text-rule">·</span>
          <span>{mins} min read</span>
        </div>
        <div className="mt-6 h-[2px] w-10 bg-red" />
      </header>

      {/* Body — prose-post class defined in globals.css */}
      <div className="prose-post mt-2">
        {Markdoc.renderers.react(renderable, React)}
      </div>

      {/* Author card */}
      <div className="mt-16 flex items-start gap-5 border-t border-rule pt-10">
        <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-full">
          <Image
            src="/prem-menon.png"
            alt="Premraj Menon"
            fill
            sizes="72px"
            className="object-cover mix-blend-multiply"
          />
        </div>
        <div>
          <p className="text-[15px] font-bold">Premraj Menon</p>
          <p className="mt-1 text-[13px] leading-[1.65] text-mid">
            Founder, Simpleworks Consulting. 39 years across Telecom, Automotive
            and Consumer Durables — now helping Indian MSME and family-business
            founders grow with clarity.
          </p>
          <div className="mt-3 flex gap-4 text-[12px] uppercase tracking-wide-4">
            <Link href="/about" className="text-red hover:text-ink transition-colors">
              About Prem →
            </Link>
            <Link href="/contact" className="text-red hover:text-ink transition-colors">
              Work together →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="mt-14 border-t border-rule pt-8">
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
