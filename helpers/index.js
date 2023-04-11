const marked = require('marked')


const mdParser = (mdData) => {
    return marked.parse(mdData)
}

module.exports = {
    mdParser
}