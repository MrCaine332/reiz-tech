import {FilterProps} from "@modules/filter/Filter";
import {GetCountriesParams} from "@app/types/params";
import {Input} from "@components/ui/input";
import {Select} from "@components/ui/select";
import styles from "./Filter.module.scss"
import {Label} from "@components/ui/label";

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

	return (
		<div className={styles.filterAdvanced}>
			<Label label={"Search by country name"} className={styles.filterAdvancedLabel}>
				<Input wrapperClassName={styles.filterAdvancedInput}
				       placeholder={"Search"}
				       value={filterData.name ?? ""}
				       onChange={(e) => onFilterInputChange(e.target.value, "name")}
				/>
			</Label>
			<Label label={"Region"} className={styles.filterAdvancedLabel}>
				<Select options={REGION_OPTIONS}
				        selectedValue={filterData.region}
				        onChange={(selectOption) =>
					        onFilterInputChange(selectOption?.value, "region")}
				        wrapperClassName={styles.filterAdvancedInput}
				        placeholder={"Region"}
				/>
			</Label>
			<Label label={"Minimal area"} className={styles.filterAdvancedLabel}>
				<Input wrapperClassName={styles.filterAdvancedInput}
				       type={"number"}
				       placeholder={"Min area"}
				       value={filterData.minArea ?? ""}
				       onChange={(e) => onFilterInputChange(e.target.value, "minArea")}
				/>
			</Label>
			<Label label={"Maximum area"} className={styles.filterAdvancedLabel}>
				<Input wrapperClassName={styles.filterAdvancedInput}
				       type={"number"}
				       placeholder={"Max area"}
				       value={filterData.maxArea ?? ""}
				       onChange={(e) => onFilterInputChange(e.target.value, "maxArea")}
				/>
			</Label>
		</div>
	);
};