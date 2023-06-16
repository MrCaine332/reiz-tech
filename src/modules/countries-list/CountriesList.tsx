import {Section} from "@components/ui/section";
import styles from './CountriesList.module.scss'
import {CountryItem} from "@components/country-item";
import {Country} from "@app/types/models";

type CountriesListProps = {
	countries: Country[]
	isLoading: boolean
}

export const CountriesList = ({ countries, isLoading }: CountriesListProps) => {
	return (
		<Section>
			{ !isLoading && countries?.map((country, index) => (
				<CountryItem country={country} key={index} />
			))}
			{ isLoading && <div>Loading</div>}
		</Section>
	);
};