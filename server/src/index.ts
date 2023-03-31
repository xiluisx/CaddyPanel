import { app } from './app'
import type http from 'http'

let server: http.Server | null = null

async function init () {
	if (require.main === module) {
		server = app.listen(8000, () => {
			console.log('[Server]: Server running at http://localhost:8000')
		})
	}
}

init()

export { app, server }
