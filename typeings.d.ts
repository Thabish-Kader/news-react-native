export interface Article {
	source: { id: null | string; name: string };
	author: null | string;
	title: string;
	description: null | string;
	url: string;
	urlToImage: null | string;
	publishedAt: string;
	content: null | string;
}

export interface Source {
	id: string;
	name: string;
	description: string;
	url: string;
	category: string;
	language: string;
	country: string;
}
