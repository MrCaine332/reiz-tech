import {useState} from "react";
import {Filter} from "@modules/filter";
import {CountriesList} from "@modules/countries-list";
import {SortingOption} from "@components/sorting/Sorting";
import styles from './Page.module.scss'

export const Basic = () => {
	const [filterData, setFilterData] = useState()

	/** TODO: useQuery to make request for countries based on filterData */

	/** TODO: refetch inside useDebounceEffect based on filterData */

	const [sortBy, setSortBy] = useState<SortingOption>({ field: 'name', order: null })

	/** TODO: sortedCountries using useMemo */

	return (
		<div className="page">
			<Filter filterData={filterData}
			        setFilterData={setFilterData}
			        currentSortingOption={sortBy}
			        onSorting={setSortBy} />
			<CountriesList countries={[]} />
		</div>
	);
};