import {Country} from "@app/types/models";
import {Button} from "@components/ui/button";
import styles from "./CountryItem.module.scss"

type CountryItemProps = {
	country: Country
	showFlag?: boolean
}

export const CountryItem = ({ country, showFlag }: CountryItemProps) => {
	return (
		<div className={styles.countryItem}>
			{ showFlag
				? <div className={styles.countryItemFlag}>
					<img src={country.flags.png} alt={country.flags.alt}/>
				</div>
				: null
			}
			<div className={styles.countryItemDetails}>
				<h4 className="textHeadline4">{country.name.common}</h4>
				<p className="textBody">
					<span className={styles.countryItemField}>Region: </span>
					<span>{country.region}</span>
				</p>
				<p className="textBody">
					<span className={styles.countryItemField}>Area: </span>
					<span>{country.area}</span>
				</p>
				<Button as={"externalLink"}
				        href={`https://en.wikipedia.org/wiki/${country.name.common}`}
				        className={styles.countryItemWikipediaButton}
				        styleType="outlined">
					See on wikipedia
				</Button>
			</div>
		</div>
	);
};