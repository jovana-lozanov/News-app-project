export class Data {
    author: string;
    title: string;
    description: string;
    url: string;
    source: string;
    image: string;
    category: string;
    language: string;
    country: string;
    published_at: string;

    constructor(obj?:any) {
        this.author = obj && obj.author || "";
        this.title = obj && obj.title || "";
        this.description = obj && obj.description || "";
        this.url = obj && obj.url || "";
        this.source = obj && obj.source || "";
        this.image = obj && obj.image || "";
        this.category = obj && obj.category || "";
        this.language = obj && obj.language || "";
        this.country = obj && obj.country || "";
        this.published_at = obj && obj.published_at || "";
    }
}