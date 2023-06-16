import styles from './CountryItem.module.scss'
import {Country} from "@app/types/models";

type CountryItemProps = {
	country: Country
}

export const CountryItem = ({ country }: CountryItemProps) => {
	return (
		<div>
			<p>{country.name.common}</p>
			<p>{country.region}</p>
			<p>{country.area}</p>
			<hr/>
		</div>
	);
};