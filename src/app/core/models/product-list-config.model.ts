export interface ProductListConfig {
  type: string;

  filters: {
    id?: string,
    name?: string,
    favorited?: string,
    limit?: number,
    offset?: number
  };
}
