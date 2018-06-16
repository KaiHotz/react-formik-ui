import { get } from './helper'

describe('Helper', () => {
  it('should work', () => {
    const obj = {
      name: {
        first: 'Hans',
      },
      queries: [
        {
          title: 'felix',
        },
      ],
    }

    expect(get(obj, 'name.first')).toBe(obj.name.first)
    expect(get(obj, 'queries[0].title')).toBe(obj.queries[0].title)
  })
})
