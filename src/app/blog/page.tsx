import BlogFeed from "@/components/blog/BlogFeed";
import SkeletonFeed from "@/components/blog/SkeletonFeed";
import { Suspense } from "react";

export default async function BlogPage(): Promise<JSX.Element> {
  return (
    <main className="flex flex-col justify-center items-center">
      <p className="text-2xl">{"Here are some blogs I've written"}</p>
      <Suspense fallback={<SkeletonFeed />}>
        <BlogFeed />
      </Suspense>
    </main>
  );
}
