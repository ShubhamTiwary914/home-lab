/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function BlogsSection() {
  const { heading, moreUrl } = DATA.sections.blogs;
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-bold">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {DATA.blogs.map((blog) => (
          <a
            key={blog.href}
            href={blog.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200"
          >
            <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-32 object-cover bg-muted" />
            <div className="p-3 flex flex-col gap-1">
              <span className="text-sm font-medium leading-snug">{blog.title}</span>
              <time className="text-xs font-mono text-muted-foreground">{blog.date}</time>
            </div>
          </a>
        ))}
      </div>
      <a
        href={moreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-sm font-mono text-muted-foreground hover:text-foreground flex items-center gap-1"
      >
        see more posts
        <ArrowUpRight className="size-3.5" aria-hidden />
      </a>
    </div>
  );
}
