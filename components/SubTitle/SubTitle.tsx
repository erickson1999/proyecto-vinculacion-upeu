import { FC } from "react";

export interface SubTitleI {
	children: string,
	className?: string
}
export const SubTitle: FC<SubTitleI> = ({ children, className = "" }) => {
	return <h2 className={`text-xl ${className}`} >{children}</h2>;
};
