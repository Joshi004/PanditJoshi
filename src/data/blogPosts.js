const articleModules = import.meta.glob('./articles/*.json', { eager: true })

export const blogPosts = Object.values(articleModules)
  .map((mod) => mod.default)
  .sort((a, b) => new Date(b.date) - new Date(a.date))
