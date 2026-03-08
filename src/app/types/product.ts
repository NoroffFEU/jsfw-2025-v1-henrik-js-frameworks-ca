import type { Review } from "./review";

export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    image: {
        url: string;
        alt: string;
    },
    rating: number;
    tags: string[];
    reviews: Review[];
}

export type Meta = {
    isFirstPage?: boolean;
    isLastPage?: boolean;
    currentPage?: number;
    previousPage?: number | null;
    nextPage?: number | null;
    pageCount?: number;
    totalCount: number;
};

// wrappers
export type ProductsResponse = {
    meta: Meta;
    data: Product[];
};

export type ProductResponse = {
    meta: Meta;
    data: Product;
};