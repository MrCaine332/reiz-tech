import styles from './CountryItem.module.scss'

export const CountryItemSceleton = () => {
	return (
		<div className={styles.countryItem}>
			<div className={'skeleton-box ' + styles.countryItemSceletonImage}></div>
			<div className={styles.countryItemSceletonDetails}>
				<div className={'skeleton-box ' + styles.countryItemSceletonTitle}></div>
				<div className={'skeleton-box ' + styles.countryItemSceletonField}></div>
				<div className={'skeleton-box ' + styles.countryItemSceletonField}></div>
				<div className={'skeleton-box ' + styles.countryItemSceletonWikipedia}></div>
			</div>
		</div>
	);
};