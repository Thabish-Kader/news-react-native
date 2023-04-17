import { NEWS_API_KEY } from "@env";
import { Source } from "../typeings";
import { NewLineKind } from "typescript";

export const fetchNewsByCategory = async (category: string) => {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${NEWS_API_KEY}`,
		{
			method: "GET",
		}
	);
	const data = await response.json();
	const sources: Source[] = data.sources;
	return sources as Source[];
};
