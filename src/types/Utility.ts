export type Nullable<T> = T | null; //Cho phép giá trị là null
export type Empty = Record<string, never>; //Đối tượng rỗng, không có thuộc tính nào
