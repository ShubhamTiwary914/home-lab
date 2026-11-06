import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionData {
  total: number;
  days: ContributionDay[];
}

const LEVEL_CLASS = ["bg-muted", "bg-foreground/25", "bg-foreground/45", "bg-foreground/70", "bg-foreground"];

export default function ContributionsSection({ data }: { data: ContributionData }) {
  const { heading, username } = DATA.sections.contributions;
  const offset = data.days.length ? new Date(data.days[0].date).getUTCDay() : 0;
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-baseline justify-between gap-2">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold flex items-center gap-1 hover:underline"
        >
          {heading}
          <ArrowUpRight className="size-4" aria-hidden />
        </a>
        <span className="text-xs font-mono text-muted-foreground">
          {data.total} contributions in the last year
        </span>
      </div>
      <div className="overflow-x-auto pb-2">
        <div className="grid grid-flow-col grid-rows-7 gap-0.75 w-max">
          {Array.from({ length: offset }, (_, i) => (
            <div key={`pad-${i}`} className="size-2.5" />
          ))}
          {data.days.map((day) => (
            <div
              key={day.date}
              title={`${day.count} on ${day.date}`}
              className={`size-2.5 rounded-xs ${LEVEL_CLASS[day.level] ?? LEVEL_CLASS[0]}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
