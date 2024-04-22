"use client";

import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";

export default function SkeletonFeed(): JSX.Element {
  return (
    <>
      <section className="m-12">
        <div className="flex items-center justify-center">
          <Avatar className="w-24 h-24">
            <div className="animate-pulse rounded-full bg-slate-700 h-24 w-24"></div>
          </Avatar>
          <p className="text-3xl font-bold ml-2">
            <a
              href="https://medium.com/@srinathvb1"
              target="_noblank"
              className="text-primary hover:underline"
            >
              @srinathvb1
            </a>
          </p>
        </div>
        <div className="m-3">
          <div className="animate-pulse rounded bg-slate-700 h-5 w-96 m-2"></div>
        </div>
      </section>
      {Array.from(Array(4).keys()).map((i) => (
        <div
          key={i}
          className="animate-pulse border m-2 p-2 rounded w-4/5 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-center">
            <div className="rounded-lg bg-slate-700 h-28 w-52 m-2 self-center"></div>
            <div className="m-2 w-full flex flex-col justify-between">
              <div>
                <div className="md:flex justify-between">
                  <div className="animate-pulse rounded bg-slate-700 h-10 w-96 m-2"></div>

                  <Badge
                    variant="secondary"
                    className="m-1 rounded-sm text-sm self-center"
                  >
                    <div className="animate-pulse rounded bg-slate-700 m-2"></div>
                  </Badge>
                </div>
                <div className="animate-pulse rounded bg-slate-700 h-2 w-1/2 m-2"></div>
                <div className="animate-pulse rounded bg-slate-700 h-2 w-1/4 m-2"></div>
              </div>
              <div>
                {Array.from(Array(5).keys()).map((j) => (
                  <Badge
                    key={j}
                    className="m-1 rounded-sm w-1/12"
                    variant="secondary"
                  >
                    <div className="animate-pulse rounded bg-slate-700 m-2"></div>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
