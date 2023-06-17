import {Section} from "@components/ui/section";
import {CountryItem, CountryItemSkeleton} from "@components/country-item";
import {Country} from "@app/types/models";
import {useState} from "react";
import {Divider} from "@components/ui/divider";
import {Checkbox} from "@components/ui/checkbox";
import styles from './CountriesList.module.scss'

type CountriesListProps = {
	countries: Country[]
	isLoading: boolean
}

export const CountriesList = ({ countries, isLoading }: CountriesListProps) => {
	const [showFlags, setShowFlags] = useState(false)

	return (
		<Section className={styles.countriesList}>
			<Checkbox label={"Show flags"}
			          checked={showFlags}
			          id={'showFlags'}
			          onChange={(e) => setShowFlags(e.target.checked)} />

			{ !isLoading && countries?.map((country, index) => (
				<>
					{ index > 0 ? <Divider /> : null }
					<CountryItem country={country} key={index} showFlag={showFlags} />
				</>
			))}

			{ isLoading && Array.from(Array(10).keys()).map((_, index) => (
				<>
					{ index > 0 ? <Divider /> : null }
					<CountryItemSkeleton />
				</>
			))}
		</Section>
	);
};