import styles from './Filter.module.scss'
import {Section} from "@components/ui/section";
import React, {useState} from "react";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";
import {FilterBasic} from "@modules/filter/FilterBasic";
import {FilterAdvanced} from "@modules/filter/FilterAdvanced";
import {Sorting, SortingOption} from "@components/sorting/Sorting";

type FilterSortProps = {
	filterData: any
	setFilterData: React.Dispatch<React.SetStateAction<any>>
	currentSortingOption: SortingOption
	onSorting: (sortingOption: SortingOption) => void
}

export type FilterProps = {
	filterData: any
	setFilterData: React.Dispatch<React.SetStateAction<any>>
}

const SORTING_OPTIONS = ['name', 'area', 'zone']

export const Filter = ({ filterData, setFilterData, currentSortingOption, onSorting }: FilterSortProps) => {
	const [filterMode, setFilterMode] = useState<'basic' | 'advanced'>('basic')

	return (
		<Section className={styles.filterWrapper}>
			<Button styleType="none"
			        className={styles.switchButton}
			        onClick={() => setFilterMode(prev => prev === 'basic' ? 'advanced' : 'basic')}
			>
				<Icons name={"cog"} size={15} />
				Switch to <span>{filterMode === 'advanced' ? 'basic' : 'advanced'}</span> mode
			</Button>

			{ filterMode === 'basic'
				? <FilterBasic filterData={filterData} setFilterData={setFilterData} />
				: <FilterAdvanced filterData={filterData} setFilterData={setFilterData} />
			}

			<Sorting options={SORTING_OPTIONS}
			         currentOption={currentSortingOption}
			         onSorting={onSorting}
			/>
		</Section>
	);
};