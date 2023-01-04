export interface QueryGetCategories {
  categories: CategoryResult
}

export interface CategoryResult {
  count: number,
  rows: [Category]
}

export interface Category {
    name: string,
    description: string,
    target: number
}