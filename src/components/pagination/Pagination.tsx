import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'
import {Section} from "@components/ui/section";
import {Button} from "@components/ui/button";
import Icons from "@components/ui/icons";

type PaginationProps = {
	pageCount: number
	currentPage?: number
	onPageChange?: (selected: number) => void
}

export const Pagination = ({ pageCount, currentPage, onPageChange }: PaginationProps) => {
	return (
		<Section>
			<ReactPaginate pageCount={pageCount}
			               forcePage={currentPage}
			               onPageChange={({ selected }) => onPageChange?.(selected) }
			               className={styles.pagination}
			               activeClassName={styles.paginationActive}

			               pageClassName={styles.paginationPage}
			               pageLinkClassName={styles.paginationPageLink}

			               breakClassName={styles.paginationPage}
			               breakLinkClassName={styles.paginationPageLink}

			               nextClassName={styles.paginationNext}
			               previousClassName={styles.paginationPrevious}

			               nextLabel={
				               <Button styleType={"round"}>
					               <Icons name={"arrow-down-simple"} size={18}/>
				               </Button>
			               }
			               previousLabel={
				               <Button styleType={"round"}>
					               <Icons name={"arrow-down-simple"} size={18}/>
				               </Button>
			               }
			/>
		</Section>
	);
};