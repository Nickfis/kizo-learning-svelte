export interface Course {
	_id: string;
	name: string;
	code: string;
	link: string;
	thumbnail: string;
	linkWithPromoCode: string;
	discountedPrice: number;
	originalPrice: number;
}

export interface SanityCourse {
	_id: string;
	name: string;
	code: string;
	link: string;
	thumbnail: {
		_type: 'image';
		asset: {
			_ref: string;
		};
	};
	discountedPrice: number;
	originalPrice: number;
}

export interface SanityProject {
	_id: string;
	name: string;
	videoLink: string;
	sourceCode?: string;
	thumbnail: {
		_type: 'image';
		asset: {
			_ref: string;
		};
	};
	releaseDate: Date;
}

export interface Project {
	_id: string;
	name: string;
	videoLink: string;
	sourceCode?: string;
	thumbnail: string;
	releaseDate: Date;
}
