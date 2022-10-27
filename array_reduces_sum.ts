const total = <K extends 'keytosum1' | 'keytosum2'>(key: K) => {
    const items: array1[] | array2[] = data
    return (items as Array<array1 | array2>).reduce(
    (initialValue, currentElement): number => {
      return initialValue + currentElement[key]
      },
      0
    )
  }