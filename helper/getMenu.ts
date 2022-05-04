export const getMenu = async () => {
  const menu: MenuProps[] = []
  const { categories, categoryLabels } = await import('../data')
  for await (const category of categories) {
    if (!category) continue
    const { pageProps }: RootObject = await import(`../data/${category}.json`)
    menu.push({
      menu: pageProps.menu,
      firstCategory: pageProps.firstCategory,
      firstCategoryName: category,
      firstCategoryLabel: categoryLabels[category],
    })
  }

  return menu
}
