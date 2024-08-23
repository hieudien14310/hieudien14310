const crypto = require('crypto')

// Tạo cặp khóa RSA
function generateKeyPair() {
	return new Promise((resolve, reject) => {
		crypto.generateKeyPair(
			'rsa',
			{
				modulusLength: 2048, // Chiều dài của khóa, thường là 2048 hoặc 4096
				publicKeyEncoding: {
					type: 'spki',
					format: 'pem',
				},
				privateKeyEncoding: {
					type: 'pkcs8',
					format: 'pem',
				},
			},
			(err, publicKey, privateKey) => {
				if (err) {
					reject(err)
				} else {
					resolve({ publicKey, privateKey })
				}
			},
		)
	})
}
generateKeyPair()
	.then((keys) => {
		console.log('Public Key:\n', keys.publicKey)
		console.log('Private Key:\n', keys.privateKey)
	})
	.catch((err) => {
		console.error('Error generating keys:', err)
	})
