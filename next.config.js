const theme = require('shiki/themes/nord.json')
const { remarkCodeHike } = require('@code-hike/mdx')

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [
			[remarkCodeHike,
				{
					theme,
					copyButton: true
				}
			]
		]
	}
});

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
});
