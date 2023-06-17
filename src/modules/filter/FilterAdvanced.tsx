import {FilterProps} from "@modules/filter/Filter";
import {GetCountriesParams} from "@app/types/params";
import {Input} from "@components/ui/input";
import {Select} from "@components/ui/select";
import styles from "./Filter.module.scss"
import {ChangeEvent} from "react";

const REGION_OPTIONS = [
	{ value: "Africa", name: "Africa"},
	{ value: "Americas", name: "Americas"},
	{ value: "Antarctic", name: "Antarctic"},
	{ value: "Asia", name: "Asia"},
	{ value: "Europe", name: "Europe"},
	{ value: "Oceania", name: "Oceania"},
]

export const FilterAdvanced = ({ filterData, setFilterData }: FilterProps) => {
	const onFilterInputChange =
		(value: string | undefined, field: keyof GetCountriesParams) => {

		if (filterData[field] === value)
			return

		setFilterData(prev => ({
			...prev,
			_page: 1,
			[field]: value
		}))
	}

	const test = (event: ChangeEvent<HTMLInputElement>, field: keyof GetCountriesParams) => {
		setFilterData(prev => ({
			...prev,
			_page: 1,
			[field]: event.target.value ?? undefined
		}))
	}

	return (
		<div className={styles.filterAdvanced}>
			<Input wrapperClassName={styles.filterAdvancedSearch}
			       placeholder={"Search by country name"}
			       value={filterData.name ?? ""}
			       onChange={(e) => test(e, "name")}
			/>
			<Select options={REGION_OPTIONS}
			        selectedValue={filterData.region}
			        onChange={(selectOption) =>
				        onFilterInputChange(selectOption?.value, "region")}
			        wrapperClassName={styles.filterAdvancedSelect}
			        placeholder={"Region"}
			/>
			<Input wrapperClassName={styles.filterAdvancedAreas}
			       type={"number"}
			       placeholder={"Min area"}
			       value={filterData.minArea ?? ""}
			       onChange={(e) => onFilterInputChange(e.target.value, "minArea")}
			/>
			<Input wrapperClassName={styles.filterAdvancedAreas}
			       type={"number"}
			       placeholder={"Max area"}
			       value={filterData.maxArea ?? ""}
			       onChange={(e) => onFilterInputChange(e.target.value, "maxArea")}
			/>
		</div>
	);
};