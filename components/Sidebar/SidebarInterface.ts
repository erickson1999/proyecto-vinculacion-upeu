export interface SidebarI {
	isOpenSidebar: boolean;
	setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
	items: SidebarItemI[];
}

export interface SidebarItemI {
	name: string;
	url: string;
}
