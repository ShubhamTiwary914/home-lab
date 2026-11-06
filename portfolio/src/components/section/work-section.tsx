/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Markdown from "react-markdown";
import { DATA } from "@/data/resume";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);
  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

function WorkItem({ work }: { work: (typeof DATA.work)[number] }) {
  return (
    <div className="flex gap-x-3">
      <LogoImage src={work.logoUrl} alt={work.company} />
      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <a href={work.href} target="_blank" rel="noopener noreferrer" className="font-semibold leading-none hover:underline">
            {work.company}
          </a>
          <span className="text-xs tabular-nums text-muted-foreground text-right flex-none font-mono">
            {work.start} - {work.end ?? DATA.sections.work.presentLabel}
          </span>
        </div>
        <div className="text-sm text-muted-foreground">
          {work.title} · {work.location}
        </div>
        <ul className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground [&_strong]:text-foreground [&_strong]:font-medium">
          {work.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span aria-hidden>-</span>
              <Markdown components={{ p: "span" }}>{bullet}</Markdown>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WorkSection() {
  return (
    <div className="w-full grid gap-8">
      {DATA.work.map((work) => (
        <WorkItem key={work.company} work={work} />
      ))}
    </div>
  );
}
