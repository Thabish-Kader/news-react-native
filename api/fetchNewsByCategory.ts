import { NEWS_API_KEY } from "@env";
import { Article, Source } from "../typeings";

export const fetchNewsByCategory = async (category: string) => {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines/sources?category=4${category}&apiKey=4${NEWS_API_KEY}`,
		{
			method: "GET",
		}
	);
	const data = await response.json();
	const sources: Source[] = data.sources;
	// console.log(articles);
	return sources as Source[];
};
