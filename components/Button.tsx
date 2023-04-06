import { MouseEventHandler, ReactNode} from "react";

export enum ButtonVariant {
	primary = 'primary',
	secondary = 'secondary',
	bordered = 'bordered',
}

type ButtonProps = {
	children: ReactNode;
	variant?: ButtonVariant;
	backgroundColor?: string;
	color?: string;
	border?: string;
	disabled?: boolean;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({children, variant, color, backgroundColor, border, disabled, onClick}: ButtonProps) => {

	const style = {
		color: color,
		backgroundColor: backgroundColor,
		border: border,
	}

	return (
		<button className={`${variant} button`} style={style} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button;