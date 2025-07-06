//Thêm totalElements vào CollectionWrapper để lưu trữ tổng số phần tử 
export class CollectionWrapper<T> {
  content: T[];
  totalElements: number;

  constructor(content: T[]) {
    this.content = content;
    this.totalElements = content.length;
  }
}
