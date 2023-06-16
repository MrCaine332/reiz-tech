export type Country = {
	name: {
		common: string
		official: string
		nativeName: {
			[key: string]: {
				official: string
				common: string
			}
		}
	}
	region: string
	area: number
}