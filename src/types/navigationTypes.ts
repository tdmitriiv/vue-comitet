export interface ContentItem {
	component: string;
	options: Record<string, any>;
}

export interface NavigationGroup {
	name: string;
	items: NavigationItem[];
}

export interface NavigationItem {
	name: string;
	url: string;
	content: Array<ContentItem> | string | null
}
