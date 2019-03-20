import axios from 'axios'

async function main() {
  const response = await axios.get('https://httpbin.org/uuid')
  const uuid = response.data.uuid
  console.log('Unique id: ' + uuid)
}

main()
