/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";

export default function BooksSection() {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-bold">{DATA.sections.books.heading}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {DATA.books.map((book) => (
          <div key={book.title} className="flex flex-col gap-1.5" title={`${book.title} by ${book.author}`}>
            <img
              src={book.image}
              alt={book.title}
              loading="lazy"
              className="w-full aspect-2/3 object-cover rounded-md border border-border bg-muted"
            />
            <span className="text-xs text-muted-foreground leading-tight line-clamp-2">{book.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
