async function main(){
	const MyNft = await ethers.getContractFactory("LofiEthereum")
	const myNft = await MyNft.deploy()
	await myNft.deployed()
	console.log(`Contract Deployed Address: ${myNft.address}`)
}

main()
.then(() => process.exit(0))
.catch((error) => {
	console.log(error)
	process.exit(1)
})
