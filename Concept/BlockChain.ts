import sha256 from 'crypto-js/sha256'

/**
 * Block có thể hiểu là 1 "khối" theo cách gọi dùng để lưu thông tin của
 * 1 cái gì đó mà bạn muốn lưu.
 * Lưu ý: Thông tin cần lưu trữ trong Block là bắt buộc phải có và ở mỗi Block
 * các thông tin lưu trữ CÓ THỂ được lưu các thông tin khác nhau.
 * @class: Block
 * @property {any} prevHash            - Giá trị hash của Block trước đó.
 * @property {object} data             - Thông tin cần lưu trữ.
 * @property {number} timeStamp        - Thời gian khi Block được tạo ra.
 * @property {string} hash             - Mã hash của Block.
 *
 * @method: mineHash()               - Tạo ra 1 mã hash bắt đầu với số 0 theo ý muốn.
 */
class Block {
	prevHash: any
	data: object
	timeStamp: number
	hash: string
	minVar: number
	constructor(prevHash: any, data: any) {
		this.prevHash = prevHash
		this.data = data
		this.timeStamp = new Date().getTime()
		this.hash = this.calculateHash()
		this.minVar = 0
	}
	calculateHash(): string {
		return sha256(this.prevHash + JSON.stringify(this.data) + this.timeStamp + this.minVar).toString()
	}
	mineHash(difficulty: number): void {
		while (!this.hash.startsWith('0'.repeat(difficulty))) {
			this.minVar++
			this.hash = this.calculateHash()
		}
	}
}
/**
 * Blockchain dịch ra là "chuỗi khối" vậy có nghĩa là Blockchain sẽ
 * tập hợp các khối(Block) lại với nhau tạo thành 1 chuỗi(chain) với nhau
 * thông qua mã hash của các khối trước đó (khác giống với LinkList)
 *
 * Blockchain thì có tính bảo toàn dữ liệu rất là mạnh mẽ. Một khi dữ liệu đã được lưu xuống Block thì không có cách nào
 * để có thể thay đổi được dữ liệu. Bởi vì nó sẽ dùng 1 cơ chế hash cái Block để ra mã hash rồi sau đó dựa vào mã hash
 * để kiểm tra xem có hợp lệ hay không.
 *
 * @property {Block} genesisBlock     - Block đầu tiên trong chuỗi
 * @property {[Block]} chain          - 1 Tập hợp chứa các Block.
 */
class Blockchain {
	genesisBlock: Block
	chain: Array<Block>
	constructor(initBlock: Block) {
		this.genesisBlock = initBlock
		this.chain = new Array(this.genesisBlock)
	}
	getLastBlock(): Block {
		return this.chain[this.chain.length - 1]
	}
	addBlock(data: any): void {
		const lastBlock: Block = this.getLastBlock()
		const newBlock: Block = new Block(lastBlock.hash, data)
		console.time('A')
		newBlock.mineHash(2)
		console.timeEnd('A')
		this.chain.push(newBlock)
	}
	isValid(): boolean {
		for (let i = 0; i < this.chain.length; i++) {
			const currentBlock: Block = this.chain[i]
			const prevBlock: Block = this.chain[i - 1]
			if (currentBlock.hash !== currentBlock.calculateHash()) return false
			if (prevBlock && currentBlock.prevHash !== prevBlock.hash) return false
		}
		return true
	}
}
const firstBlock: Block = new Block('0000', { amount: 100000 })
const hieuChain: Blockchain = new Blockchain(firstBlock)
// console.log('hieuChain', hieuChain)
hieuChain.addBlock({
	from: 'Hieu',
	to: 'Thanh',
	amount: 24000000,
})
hieuChain.addBlock({
	from: 'Hieu',
	to: 'Thanh',
	amount: 24000000,
})
hieuChain.addBlock({
	from: 'Hieu',
	to: 'Thanh',
	amount: 24000000,
})
// console.log(`hieuChain.chain`, hieuChain.chain)
// console.log('chain valid: ', hieuChain.isValid())

console.log('-----Thay đổi dữ liệu------')
hieuChain.chain[1].data = {}
// console.log(`hieuChain.chain`, hieuChain.chain)
// console.log('chain valid: ', hieuChain.isValid())
