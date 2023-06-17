import styles from './CountryItem.module.scss'

export const CountryItemSkeleton = () => {
	return (
		<div className={styles.countryItem}>
			<div className={'skeleton-box ' + styles.countryItemSkeletonImage}></div>
			<div className={styles.countryItemSkeletonDetails}>
				<div className={'skeleton-box ' + styles.countryItemSkeletonTitle}></div>
				<div className={'skeleton-box ' + styles.countryItemSkeletonField}></div>
				<div className={'skeleton-box ' + styles.countryItemSkeletonField}></div>
				<div className={'skeleton-box ' + styles.countryItemSkeletonWikipedia}></div>
			</div>
		</div>
	);
};