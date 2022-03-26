declare module "*.module.scss" {
	const classes: { [className: string]: string };
	export = classes;
}

declare module "*.module.css" {
	const classes: { [className: string]: string };
	export = classes;
}

