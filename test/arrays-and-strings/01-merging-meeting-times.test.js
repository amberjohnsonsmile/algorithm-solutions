import { mergeRanges } from '../../src/arrays-and-strings/01-merging-meeting-times.js'
import * as assert from 'assert'

describe('mergeRanges', function () {
  // it('should return an array of condensed meeting time ranges', () => {
  //   const input = [
  //     { startTime: 0, endTime: 1 },
  //     { startTime: 3, endTime: 5 },
  //     { startTime: 4, endTime: 8 },
  //     { startTime: 10, endTime: 12 },
  //     { startTime: 9, endTime: 10 }
  //   ]
  //   const expected = [
  //     { startTime: 0, endTime: 1 },
  //     { startTime: 3, endTime: 8 },
  //     { startTime: 9, endTime: 12 }
  //   ]

  //   const result = mergeRanges(input)
  //   assert.deepEqual(result, expected)
  // })

  //   it('should merge adjacent meetings', () => {
  //     const input = [
  //       { startTime: 1, endTime: 2 },
  //       { startTime: 2, endTime: 3 }
  //     ]
  //     const expected = [{ startTime: 1, endTime: 3 }]

  //     const result = mergeRanges(input)
  //     assert.deepEqual(result, expected)
  //   })

  //   it('should allow a later meeting to be subsumed if within range of an earlier meeting', () => {
  //     const input = [
  //       { startTime: 1, endTime: 5 },
  //       { startTime: 2, endTime: 3 }
  //     ]
  //     const expected = [{ startTime: 1, endTime: 5 }]

  //     const result = mergeRanges(input)
  //     assert.deepEqual(result, expected)
  //   })

  it('should merge lots of meetings into one', () => {
    const input = [
      { startTime: 1, endTime: 10 },
      { startTime: 2, endTime: 6 },
      { startTime: 3, endTime: 5 },
      { startTime: 7, endTime: 9 }
    ]
    const expected = [{ startTime: 1, endTime: 10 }]

    const result = mergeRanges(input)
    assert.deepEqual(result, expected)
  })
})
