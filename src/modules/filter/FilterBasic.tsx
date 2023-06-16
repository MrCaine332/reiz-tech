import {FilterProps} from "@modules/filter/Filter";
import {Button} from "@components/ui/button";
import styles from './Filter.module.scss'
import {getCountriesByName} from "@app/http/api-calls";

export const FilterBasic = ({ setFilterData }: FilterProps) => {

	const setFilterSmallerThanLithuania = () => {
		getCountriesByName('Lithuania')
			.then((res) => {
				const countryLithuania = res[0]
				setFilterData(prev => ({
					_limit: prev._limit,
					_page: 1,
					maxArea: countryLithuania.area
				}))
			})
	}

	const setFilterOceaniaOnly = () => {
		setFilterData(prev => ({
			_limit: prev._limit,
			_page: 1,
			region: "Oceania"
		}))
	}

	const reset = () => {
		setFilterData(prev => ({
			_limit: prev._limit,
			_page: 1,
		}))
	}

	return (
		<div className={styles.filter}>
			<div className={styles.filterBasic}>
				<Button styleType="outlined" onClick={setFilterSmallerThanLithuania}>
					Countries smaller than Lithuania
				</Button>
				<Button styleType="outlined" onClick={setFilterOceaniaOnly}>
					Oceania region only
				</Button>
				<Button styleType="filled" onClick={reset}>
					Reset
				</Button>
			</div>
		</div>
	);
};