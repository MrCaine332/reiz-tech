import React, {useEffect, useRef, useState} from 'react';
import styles from "./Select.module.scss"
import Icons from "@components/ui/icons";
import {Button} from "@components/ui/button";

type SelectOption = {
	value: string
	name: string
}


type SelectProps = {
	options: SelectOption[]
	selectedValue: string | undefined
	onChange: (selectOption: SelectOption | undefined) => void
	wrapperClassName?: string
	dropdownClassName?: string
	placeholder?: string
}


export const Select = ({
    options,
    selectedValue,
    onChange,
    wrapperClassName,
	dropdownClassName,
	placeholder
}: SelectProps) => {

	const [isOpened, setIsOpened] = useState<boolean>(false)
	const [highlightedIndex, setHighlightedIndex] = useState(0)

	const wrapRef = useRef<HTMLDivElement>(null)
	const listRef = useRef<HTMLDivElement>(null)

	const clear = (e: any) => {
		e.stopPropagation()
		onChange(undefined)
	}

	useEffect(() => {
		const listener = (e: MouseEvent) => {
			if (!wrapRef.current?.contains(e.target as Node))
				setIsOpened(false)
		}
		document.addEventListener('click', listener)
		return () => document.removeEventListener('click', listener)
	}, [])

	useEffect(() => {
		setHighlightedIndex(0)
	}, [isOpened])

	useEffect(() => {
		const keyPressHandler = (e: KeyboardEvent) => {
			if (e.target !== wrapRef.current) return
			switch (e.code) {
				case "Enter":
					if (!isOpened) {
						setIsOpened(prev => !prev)
						break
					}
					onChange(options[highlightedIndex])
					setIsOpened(prev => !prev)
					break
				case "Space":
					setIsOpened(prev => !prev)
					break
				case "ArrowUp":
					e.preventDefault()
					if (highlightedIndex === 0)
						break
					setHighlightedIndex(prevState => prevState - 1)
					break
				case "ArrowDown":
					e.preventDefault()
					if (highlightedIndex === options.length - 1)
						break
					setHighlightedIndex(prevState => prevState + 1)
					break
				case "Escape":
				case "Tab":
					if (isOpened) {
						setIsOpened(prev => !prev)
					}
					break
			}
		}

		wrapRef.current?.addEventListener('keydown', keyPressHandler)
		return () => wrapRef.current?.removeEventListener('keydown', keyPressHandler)
	}, [isOpened, highlightedIndex])


	return (
		<div className={[
				 styles.selectWrapper,
				 wrapperClassName
			 ].join(' ')}
		     onClick={() => setIsOpened(prev => !prev)}
		     tabIndex={0}
		     ref={wrapRef}
		>
			<div className={styles.selectSelectedItem}>
				{
					(placeholder && selectedValue === undefined)
						? <div className={styles.selectSelectedItem_placeholder}>
							{ placeholder }
						</div>
						: options.find((option) => option.value === selectedValue)?.name
				}
			</div>
			<div className={styles.selectUtils}>
				<Button styleType={"none"}
				        className={styles.selectUtilsClose}
				        onClick={clear}
				>
					<Icons name="close" size={18} />
				</Button>
				<div className={[
					styles.selectUtilsArrow,
					isOpened ? styles.selectUtilsArrow_rotated : ''
				].join(' ')}>
					<Icons name="arrow-down-simple" size={20}/>
				</div>
			</div>

			{ isOpened &&
                <div className={[
						 styles.selectListWrapper,
	 	                 dropdownClassName
                     ].join(' ')}
                     ref={listRef}
                >
                    <ul className={styles.selectList}>
						{options.map((option, index) => (
							<li key={option.value}
							    onClick={() => onChange(option)}
							    onMouseEnter={() => setHighlightedIndex(index)}
							    className={[
								    styles.selectListItem,
								    option.value === selectedValue ? styles.selectListItem_selected : '',
								    highlightedIndex === index ? styles.selectListItem_highlighted : ''
							    ].join(' ')}
							>
								{option.name}
							</li>
						))}
                    </ul>
                </div>
			}
		</div>
	);
};