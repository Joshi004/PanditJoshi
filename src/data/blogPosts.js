const articleModules = import.meta.glob('./articles/*.json', { eager: true })

export const blogPosts = Object.values(articleModules)
  .map((mod) => mod.default)
