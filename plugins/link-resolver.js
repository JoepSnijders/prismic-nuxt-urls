/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return '/'
  }

  if (doc.type === 'contentpage') {
    if(!doc.data) {
      return `/${ doc.uid }`
    } else {
      return (doc.data.parent_page.id ? `/${doc.data.parent_page.uid}/${doc.uid}` : `/${doc.uid}`)
    }
  }
  return '/not-found'
}