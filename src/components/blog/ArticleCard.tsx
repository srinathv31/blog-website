/* eslint-disable @next/next/no-img-element */
import { MediumArticleRSS } from "@/interfaces/Medium";
import parseRss from "@/utils/rss";
import { Badge } from "../ui/badge";
import { ExternalLink } from "lucide-react";

export default function ArticleCard({
  article,
}: {
  article: MediumArticleRSS;
}): JSX.Element {
  const articlePreview = parseRss(article.description);
  return (
    <a
      key={article.title}
      href={article.link}
      target="_noblank"
      className="relative group border m-2 p-2 rounded w-4/5 overflow-hidden"
    >
      <ExternalLink className="absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-2 group-hover:transition-all group-hover:duration-300" />
      <div className="flex flex-col md:flex-row justify-center group-hover:scale-95 group-hover:transition-all">
        <img
          src={article.thumbnail}
          alt={`${article.title} thumbnail`}
          height={200}
          width={200}
          className="rounded-lg m-2 self-center"
        />
        <div className="m-2 w-full flex flex-col justify-between">
          <div>
            <div className="md:flex justify-between">
              <p className="text-xl my-1 font-semibold">{article.title}</p>
              {/* <p>{article.author}</p> */}
              <Badge
                variant="outline"
                className="m-1 rounded-sm text-sm self-center"
              >
                {new Date(article.pubDate).toLocaleDateString()}
              </Badge>
            </div>
            <p className="font-light italic text-xs w-3/4 max-h-20 text-ellipsis overflow-hidden">
              {articlePreview}...
            </p>
          </div>
          <div>
            {article.categories.map((category) => (
              <Badge
                key={category}
                className="m-1 rounded-sm"
                variant="secondary"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
