module.exports = {
    //lin & prettify TS and  JS files
    '*.{js, jsx, ts, tsx}': (filenames) => [
        `prettier --white ${filenames.join('')}`
            `npm run lint --fix . ${filenames.json('--file')}`,
        `npm test -- --findRelatedTest ${filenames.join(' ')}`
    ]
}