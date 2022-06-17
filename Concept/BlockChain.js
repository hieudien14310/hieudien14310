"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sha256_1 = __importDefault(require("crypto-js/sha256"));
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
    constructor(prevHash, data) {
        this.prevHash = prevHash;
        this.data = data;
        this.timeStamp = new Date().getTime();
        this.hash = this.calculateHash();
        this.minVar = 0;
    }
    calculateHash() {
        return (0, sha256_1.default)(this.prevHash + JSON.stringify(this.data) + this.timeStamp + this.minVar).toString();
    }
    mineHash(difficulty) {
        while (!this.hash.startsWith('0'.repeat(difficulty))) {
            this.minVar++;
            this.hash = this.calculateHash();
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
    constructor(initBlock) {
        this.genesisBlock = initBlock;
        this.chain = new Array(this.genesisBlock);
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(data) {
        const lastBlock = this.getLastBlock();
        const newBlock = new Block(lastBlock.hash, data);
        console.time('A');
        newBlock.mineHash(2);
        console.timeEnd('A');
        this.chain.push(newBlock);
    }
    isValid() {
        for (let i = 0; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const prevBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash())
                return false;
            if (prevBlock && currentBlock.prevHash !== prevBlock.hash)
                return false;
        }
        return true;
    }
}
const firstBlock = new Block('0000', { amount: 100000 });
const hieuChain = new Blockchain(firstBlock);
// console.log('hieuChain', hieuChain)
hieuChain.addBlock({
    from: 'Hieu',
    to: 'Thanh',
    amount: 24000000,
});
hieuChain.addBlock({
    from: 'Hieu',
    to: 'Thanh',
    amount: 24000000,
});
hieuChain.addBlock({
    from: 'Hieu',
    to: 'Thanh',
    amount: 24000000,
});
// console.log(`hieuChain.chain`, hieuChain.chain)
// console.log('chain valid: ', hieuChain.isValid())
console.log('-----Thay đổi dữ liệu------');
hieuChain.chain[1].data = {};
// console.log(`hieuChain.chain`, hieuChain.chain)
// console.log('chain valid: ', hieuChain.isValid())
