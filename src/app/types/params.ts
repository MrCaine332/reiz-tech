export type GetCountriesParams = {
	_page: number
	_limit: number

	minArea?: number
	maxArea?: number
	region?: string
	name?: string
	sortBy?: string
	sortOrder?: "asc" | "desc"
}