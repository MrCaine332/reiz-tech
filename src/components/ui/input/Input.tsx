import styles from "./Input.module.scss"
import {forwardRef, InputHTMLAttributes} from "react";

type BaseProps = {
	children?: React.ReactNode
	wrapperClassName?: string
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(({
	wrapperClassName, children, className, ...rest },
    ref
) => {
	return (
		<div className={[styles.inputWrapper, wrapperClassName].join(" ")}>
			<input ref={ref} className={["textBody" ,styles.input, className].join(" ")}
			       {...rest} />
			{ children }
		</div>
	);
});