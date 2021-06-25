import { readFile } from 'fs/promises'

const jsonPath = new URL('./user.json', import.meta.url)
const jsonText = await readFile(jsonPath)
const json = JSON.parse(jsonText)

const { id, name } = json
console.log(id, name)