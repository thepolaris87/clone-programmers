/// <reference types="vite/client" />

declare module '*.md';

<<<<<<< HEAD

declare module "*.svg" {
	import * as React from "react";

	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
}
=======
declare module '*.svg' {
    import React from 'react';

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
>>>>>>> 97460a81f994c029712ebbb49ef1cf120608693a
