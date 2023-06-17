import {GetCountriesParams} from "@app/types/params";
import $api from "@app/http/api";
import {Country} from "@app/types/models";
import _ from "lodash";

export const getCountries = async (params: GetCountriesParams) => {
	const { data: countries } = await $api.get<Country[]>('/all?fields=name,region,area,flags')

	const filteredCountries = _.filter(countries, (country) => {
		if (params.name && !country.name.common.toLowerCase().includes(params.name.toLowerCase())) {
			return false
		}
		if (params.region && country.region !== params.region) {
			return false
		}
		if (params.minArea && country.area < params.minArea) {
			return false
		}
		if (params.maxArea && country.area > params.maxArea) {
			return false
		}

		return true
	})

	let sortedCountries = filteredCountries

	if (params.sortBy && params.sortOrder) {
		sortedCountries = _.orderBy(filteredCountries,
			[params.sortBy === 'name' ? 'name.common' : params.sortBy],
			[params.sortOrder])
	}

	const paginatedCountries = _.slice(sortedCountries,
		(params._page - 1) * params._limit,
		(params._page - 1) * params._limit + params._limit
	)

	return { total: sortedCountries.length, countries: paginatedCountries }
}

export const getCountriesByName = async (name: string) => {
	const { data: countries } = await $api.get<Country[]>(`/name/${name}?fields=name,region,area`)
	return countries
}