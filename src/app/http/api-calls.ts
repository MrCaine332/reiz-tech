import {GetCountriesParams} from "@app/types/params";
import $api from "@app/http/api";
import {Country} from "@app/types/models";
import _ from "lodash";

export const getCountries = async (params: GetCountriesParams) => {
	const { data: countries } = await $api.get<Country[]>("/all?fields=name,region,area,flags")

	/** Since restcountries api does not provide necessary for
	 *  filtering and/or pagination query params,
	 *  it was necessary to implement filtering/pagination between requests */

	/** Filter all countries by specified params */
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

	/** Sort filtered countries by specified params */
	let sortedCountries = filteredCountries

	if (params.sortBy && params.sortOrder) {
		sortedCountries = _.orderBy(filteredCountries,
			[params.sortBy === "name" ? "name.common" : params.sortBy],
			[params.sortOrder])
	}

	/** Paginate sorted countries.
	 *  Default value is 10 countries per 1 page.*/
	const paginatedCountries = _.slice(sortedCountries,
		(params._page - 1) * params._limit,
		(params._page - 1) * params._limit + params._limit
	)

	/** Return total number of countries for pagination
	 *  and 10 countries regarding current page */
	return { total: sortedCountries.length, countries: paginatedCountries }
}

export const getCountriesByName = async (name: string) => {
	const { data: countries } = await $api.get<Country[]>(`/name/${name}?fields=name,region,area`)
	return countries
}