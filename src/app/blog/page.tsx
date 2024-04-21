/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import parseRss from "@/utils/rss";
import { ExpandIcon, ExternalLink, LinkIcon, OutdentIcon } from "lucide-react";

interface MediumResponseRSS {
  status: string;
  feed: MediumFeed;
  items: MediumArticleRSS[];
}

interface MediumFeed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

interface MediumArticleRSS {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: any;
  categories: string[];
}

async function fetchMediumPosts() {
  const mediumUrl = "https://medium.com/feed/@srinathvb1";
  const rssParserUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`;
  const res = await fetch(rssParserUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.MEDIUM_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Charset": "utf-8",
    },
  });
  //   console.log("🚀 ~ fetchMediumPosts ~ res:", res);

  const data = (await res.json()) as MediumResponseRSS;
  const articlesWithThumbnails = data.items.map((item) => {
    const thumbnailRegex = item.description
      .toString()
      .match(/<img[^>]+src="([^">]+)"/);
    if (!thumbnailRegex) {
      return { ...item };
    }
    return { ...item, thumbnail: thumbnailRegex[1] };
  });
  //   console.log("🚀 ~ fetchMediumPosts ~ data:", data);
  return { ...data, items: articlesWithThumbnails };
}

export default async function BlogPage(): Promise<JSX.Element> {
  const data = await fetchMediumPosts();
  return (
    <main className="flex flex-col justify-center items-center">
      <p className="text-2xl">Blog Page</p>
      <Avatar>
        <AvatarImage src={data.feed.image} />
        <AvatarFallback>SV</AvatarFallback>
      </Avatar>
      <p>{data.feed.title}</p>
      <a href={data.feed.url} target="_noblank">
        {data.feed.url}
      </a>
      {data.items.map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_noblank"
          className="relative border m-2 p-2 rounded w-4/5 flex"
        >
          {/* <ExternalLink className="absolute right-2" /> */}
          <div className="flex hover:scale-95 transition">
            <img
              src={item.thumbnail}
              alt={`${item.title} thumbnail`}
              height={200}
              width={200}
              className="rounded-lg m-2 self-center"
            />
            <div className="m-2">
              <div className="md:flex justify-between">
                <p className="text-xl my-1 font-semibold">{item.title}</p>
                {/* <p>{item.author}</p> */}
                <Badge variant="outline" className="m-1 rounded-sm text-sm">
                  {new Date(item.pubDate).toLocaleDateString()}
                </Badge>
              </div>

              <p className="font-light italic text-xs w-3/4">
                {parseRss(item.description)}
              </p>

              {item.categories.map((category) => (
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
        </a>
      ))}
    </main>
  );
}
