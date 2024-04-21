import BlogFeed from "@/components/blog/BlogFeed";
import SkeletonFeed from "@/components/blog/SkeletonFeed";
import { Suspense } from "react";

export default async function BlogPage(): Promise<JSX.Element> {
  return (
    <main className="flex flex-col justify-center items-center">
      <p className="text-2xl">Blog Page</p>
      <Suspense fallback={<SkeletonFeed />}>
        <BlogFeed />
      </Suspense>
    </main>
  );
}
