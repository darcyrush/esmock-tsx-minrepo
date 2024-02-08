import { describe, it, mock } from 'node:test'
import { equal } from 'node:assert/strict'
import { strict as esmock } from 'esmock'
import main from './main.js'

describe('Min', async () => {
  it('Repo', async () => {
    const log = mock.fn(() => undefined)
    
    await esmock('./main.js', {
      'node:console': { log }
    })

    main()

    equal(log.mock.calls.length, 1)
    mock.reset()
  })
})
