import Image from "next/image";
import Link from "next/link";
import type { HomeStory } from "@/content/home";

// One client story: headline block with the red rule and its image on the
// left, the problem → action → result list on the right. Used by the homepage
// and the /services hub, so the copy lives once in content/home.ts.
export default function StoryArticle({
  story,
  className = "",
}: {
  story: HomeStory;
  className?: string;
}) {
  return (
    <article
      className={`grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-14 gap-y-6 items-start ${className}`}
    >
      <div className="border-l-2 border-red pl-6">
        <p className="text-[11px] md:text-[13px] uppercase tracking-widest text-light leading-[1.6] mb-4">
          {story.caption}
        </p>
        <h3 className="text-[20px] md:text-[24px] font-bold leading-[1.3] text-ink mb-3">
          {story.title}
        </h3>
        {story.note && <p className="text-[14px] text-light">{story.note}</p>}
        {story.image && (
          <Image
            src={story.image.src}
            alt={story.image.alt}
            width={story.image.width}
            height={story.image.height}
            loading="lazy"
            sizes="360px"
            className="mix-blend-multiply mt-6 w-full max-w-[360px] h-auto"
          />
        )}
      </div>
      <div>
        <dl>
          {story.rows.map((row) => (
            <div key={row.label} className="border-t-[0.5px] border-rule pt-[22px] pb-[26px]">
              <dt className="text-[13px] font-bold uppercase tracking-widest text-ink mb-3">
                {row.label}
              </dt>
              <dd
                className={`text-[16px] md:text-[17px] leading-[1.7] ${
                  row.emphasis ? "text-red font-bold" : "text-mid"
                }`}
              >
                {row.text}
              </dd>
            </div>
          ))}
        </dl>
        {story.link && (
          <Link href={story.link.href} className="text-red hover:underline w-fit inline-block mt-2">
            {story.link.label} &rarr;
          </Link>
        )}
      </div>
    </article>
  );
}
