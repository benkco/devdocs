import { defineDocumentType, makeSource } from 'contentlayer/source-files'

/** @type {import('contentlayer/source-files').ComputedFields} */

export const BlogPost = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/**/**/*.mdx',
    contentType: 'mdx',
    fields: {
        author: {
            type: 'string',
            required: true,
            description: 'Author of Blog Article'
        },
        github: {
            type: 'string',
            required: true,
            // eslint-disable-next-line quotes
            description: "Author's Github Profile"
        },
        title: {
            type: 'string',
            required: true,
            description: 'Title of Blog Article'
        },
        date: { type: 'date', required: true, description: 'Date of Post' },
        emoji: {
            type: 'string',
            required: false,
            description: 'Visual Summary Emoji'
        },
        language: {
            type: 'string',
            required: true,
            description: 'Selected Language'
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
            description: 'Blog Article Tags'
        }
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/db/${doc._raw.flattenedPath}`
        }
    }
}))

export default makeSource({
    contentDirPath: 'db',
    documentTypes: [BlogPost]
})
