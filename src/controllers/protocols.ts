export interface HttpRespons<T> {
  statusCode: number;
  body: T | string;
}
