import {useEffect, useState} from "react";
import {Filter} from "@modules/filter";
import {CountriesList} from "@modules/countries-list";
import {useQuery} from "react-query";
import {getCountries} from "@app/http/api-calls";
import {GetCountriesParams} from "@app/types/params";
import {useDebounceEffect} from "@app/hooks/useDebounceEffect";
import {Pagination} from "@components/pagination";

export const Basic = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [filterData, setFilterData] = useState<GetCountriesParams>({
		_limit: 10, _page: 1
	})

	const {data = { total: 0, countries: [] }, refetch} = useQuery({
		queryKey: ["countries"],
		queryFn: () => getCountries(filterData),
		onSuccess: () => {
			setIsLoading(false)
		}
	})

	useDebounceEffect(() => {
		refetch()
	}, [filterData], 350)

	useEffect(() => {
		setIsLoading(true)
	}, [filterData])

	return (
		<div className="page">
			<Filter filterData={filterData} setFilterData={setFilterData} />
			<CountriesList countries={data.countries} isLoading={isLoading} />
			<Pagination pageCount={data.total / filterData._limit}
			            currentPage={filterData._page - 1}
			            onPageChange={(page) =>
				            setFilterData(prev => ({...prev, _page: page + 1}))}
			/>
		</div>
	);
};