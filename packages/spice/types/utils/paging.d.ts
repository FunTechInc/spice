type PagingItem<T extends string = "..."> = number | T;
export declare const getPageRange: (totalCount: number, perPage: number) => PagingItem<string>[];
export declare const getPaginationRange: <T extends string>(currentPage: number, totalCount: number, perPage: number, size?: number, ellipsis?: T) => PagingItem<T>[];
export {};
