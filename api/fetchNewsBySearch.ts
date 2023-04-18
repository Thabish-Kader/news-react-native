import { NEWS_API_KEY } from "@env";
import { Article } from "../typeings";

export const fetchNewsBySearch = async (search: string) => {
	const response = await fetch(
		`https://newsapi.org/v2/everything?q=${search}&apiKey=${NEWS_API_KEY}`,
		{
			method: "GET",
		}
	);
	const data = await response.json();
	const articles: Article[] = data.articles;
	return articles as Article[];
};
