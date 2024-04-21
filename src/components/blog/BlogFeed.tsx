import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ArticleCard from "./ArticleCard";
import { MediumResponseRSS } from "@/interfaces/Medium";

async function fetchMediumPosts() {
  const mediumUrl = await new Promise((resolve) =>
    setTimeout(() => resolve("https://medium.com/feed/@srinathvb1"), 1500),
  );
  //   const mediumUrl = "https://medium.com/feed/@srinathvb1";
  const rssParserUrl = `https://api.rss2json.com/v1/api.json?rss_url=${mediumUrl}`;
  const res = await fetch(rssParserUrl, {
    method: "GET",
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

export default async function BlogFeed(): Promise<JSX.Element> {
  const data = await fetchMediumPosts();

  return (
    <>
      <Avatar>
        <AvatarImage src={data.feed.image} />
        <AvatarFallback>SV</AvatarFallback>
      </Avatar>
      <p>{data.feed.title}</p>
      <a href={data.feed.url} target="_noblank">
        {data.feed.url}
      </a>
      {data.items.map((item) => (
        <ArticleCard key={item.title} article={item} />
      ))}
    </>
  );
}
