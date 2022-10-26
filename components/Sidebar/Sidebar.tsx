import { FC } from 'react';

import { v4 as uuid } from 'uuid';
import Link from "next/link"

import { Button } from '../Button';
import { SidebarI } from './SidebarInterface';
export const Sidebar: FC<SidebarI> = ({
	isOpenSidebar,
	setIsOpenSidebar,
	items,
}) => {
	return (
		<div
			className={`h-screen w-3/4 md:w-2/12 z-50 fixed bg-white shadow-md p-2 transition-all ${isOpenSidebar ? 'translate-x-0' : '-translate-x-full'
				}`}
		>
			{/* button close sidebar */}
			<div className="flex w-full justify-end">
				<Button
					background={'bg-primary'}
					text={'X'}
					padding={'px-3 py-1'}
					rounded={'rounded-full'}
					colorText={'text-secondary'}
					className={'font-bold text-xl'}
					onClick={() => {
						setIsOpenSidebar(false);
					}}
				></Button>
			</div>

			<div className="p-2">
				<ul className="flex flex-col gap-y-2 ">
					{items.map((item) => {
						return (
							<Link key={uuid()} href={item.url}>
								<li
									onClick={() => {
										setIsOpenSidebar(false);
									}}
									className="hover:bg-secondary font-semibold bg-primary bg-opacity-10 hover:bg-opacity-30 cursor-pointer rounded-xl p-2"
								>
									{item.name}
								</li>
							</Link>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
