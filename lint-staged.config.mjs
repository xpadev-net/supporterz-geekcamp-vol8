export default {
    "**/*.{ts,tsx,js,jsx,json,scss,css}": [()=>"npm run format",()=>"npm run eslint:fix",()=>"npm run check-types"],
};