import React from "react";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";
import styles from "./Sorting.module.scss"

export type SortingOption = {
	field: string | null
	order: "asc" | "desc" | null
}

type SortingProps = {
	options: string[]
	currentOption: SortingOption
	onSorting: (sortingOption: SortingOption) => void
}

export const Sorting = ({ options, currentOption, onSorting }: SortingProps) => {

	const onSortingButtonClick = (option: string) => {
		if (currentOption.field !== option
			|| (currentOption.field === option && currentOption.order === null)) {
			onSorting({ field: option, order: "asc" })
		} else {
			if (currentOption.order === "asc")
				onSorting({ field: option, order: "desc" })
			if (currentOption.order === "desc")
				onSorting({ field: option, order: null })
		}
	}

	return (
		<div className={styles.sorting}>
			<span>Sort by:</span>
			<div className={styles.sortButtons}>
				{ options.map((option, index) => (
					<Button styleType="outlined"
					        className={styles.sortButton}
					        onClick={() => onSortingButtonClick(option)}
					        key={index}
					>
						{ option }
						{
							(currentOption.field === option && currentOption.order !== null)
								? <div className={[
									styles.sortButtonArrow,
									currentOption.order === "desc"
										? styles.sortButtonArrow_rotated
										: ""
								].join(" ")}>
									<Icons name={"arrow-down-simple"} size={16} />
								</div>
								: null
						}
					</Button>
				)) }
			</div>
		</div>
	);
};
