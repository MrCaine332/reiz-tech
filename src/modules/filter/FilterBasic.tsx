import {FilterProps} from "@modules/filter/Filter";
import {Button} from "@components/ui/button";
import styles from './Filter.module.scss'

export const FilterBasic = ({ filterData, setFilterData }: FilterProps) => {
	return (
		<div className={styles.filter}>
			<div className={styles.filterBasic}>
				<Button styleType="outlined">
					Countries smaller than Lithuania
				</Button>
				<Button styleType="outlined">
					Oceania region only
				</Button>
				<Button styleType="filled">
					Reset
				</Button>
			</div>
		</div>
	);
};