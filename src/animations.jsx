export const sentence = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

export const letter = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export const heroCont = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.25,
		},
	},
};

export const heroAnim = {
	hidden: { y: 200 },
	visible: {
		y: 0,
		transition: { duration: 0.75, ease: 'easeOut' },
	},
};
export const imgAnim = {
	hidden: { y: 200, opacity:0, },
	visible: {
		y: 0,
		opacity:1,
		transition: { duration: 0.75, ease: 'easeOut' },
	},
};

export const scrollAnim = {
	hidden: {
		y: '50px',
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};