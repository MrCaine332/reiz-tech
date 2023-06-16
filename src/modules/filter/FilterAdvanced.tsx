import {FilterProps} from "@modules/filter/Filter";
import {Input} from "@components/ui/input";
import styles from './Filter.module.scss'

export const FilterAdvanced = ({ filterData, setFilterData }: FilterProps) => {
	return (
		<div>
			<Input placeholder={"Search by country name"} />
		</div>
	);
};