import '@babel/polyfill'

function main() {
  console.log('testing')
  const a = [1,2,3]
  const text = 'result of [...[1,2,3].includes(1) is ' + [...a].includes(1)
  document.getElementById("greeting").innerHTML = text
}

main()
