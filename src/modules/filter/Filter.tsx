import {Section} from "@components/ui/section";
import React, {useState} from "react";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";
import {FilterBasic} from "@modules/filter/FilterBasic";
import {FilterAdvanced} from "@modules/filter/FilterAdvanced";
import {Sorting, SortingOption} from "@components/sorting/Sorting";
import {GetCountriesParams} from "@app/types/params";
import styles from './Filter.module.scss'

type FilterSortProps = {
	filterData: GetCountriesParams
	setFilterData: React.Dispatch<React.SetStateAction<GetCountriesParams>>
}

export type FilterProps = {
	filterData: GetCountriesParams
	setFilterData: React.Dispatch<React.SetStateAction<GetCountriesParams>>
}

const SORTING_OPTIONS = ['name', 'area', 'region']

export const Filter = ({ filterData, setFilterData }: FilterSortProps) => {
	const [filterMode, setFilterMode] = useState<'home' | 'advanced'>('home')

	const onSorting = (sortingOption: SortingOption) => {
		setFilterData(prev => ({
			...prev,
			sortBy: sortingOption.field ?? undefined,
			sortOrder: sortingOption.order ?? undefined
		}))
	}

	return (
		<Section className={styles.filterWrapper}>
			<Button styleType="none"
			        className={styles.switchButton}
			        onClick={() => setFilterMode(prev => prev === 'home' ? 'advanced' : 'home')}
			>
				<Icons name={"cog"} size={15} />
				Switch to <span>{filterMode === 'advanced' ? 'home' : 'advanced'}</span> mode
			</Button>

			{ filterMode === 'home'
				? <FilterBasic filterData={filterData} setFilterData={setFilterData} />
				: <FilterAdvanced filterData={filterData} setFilterData={setFilterData} />
			}

			<Sorting options={SORTING_OPTIONS}
			         currentOption={{
						 field: filterData.sortBy || null,
				         order: filterData.sortOrder || null
					 }}
			         onSorting={onSorting}
			/>
		</Section>
	);
};