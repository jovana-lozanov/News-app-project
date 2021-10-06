import { Data } from "./data.model";
import { Pagination } from "./pagination.model";

export class NewsList {
    pagination: Pagination;
    data: Data[];

    constructor(obj?:any) {
        this.pagination = obj && new Pagination(obj.pagination) || new Pagination();
        this.data = obj && obj.data &&
         obj.data.map((x: any) => new Data(x)) || [];
    }
}