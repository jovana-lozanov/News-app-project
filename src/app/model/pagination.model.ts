export class Pagination {
    limit: number;
    offset: number;
    count: number;
    total: number;

    constructor(obj?:any) {
        this.limit = obj && obj.limit || 0;
        this.offset = obj && obj.offset || 0;
        this.count = obj && obj.count || 0;
        this.total = obj && obj.total || 0;
    }
}