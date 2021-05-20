
const getHash = () => {
  const hash = location.hash.slice(1).split('/')[1]
  return hash
}

export default getHash

