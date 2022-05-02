test("age should be older 90 ", () => {
    const ages = [22, 23, 45, 1, 91, 100]

    const oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(2)
    expect(oldAges).toStrictEqual([91, 100])

  }
)