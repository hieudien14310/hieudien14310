/**
 * Dùng Signature là để chống thay đổi dữ liệu khi từ client gọi tới BE.
 * Mục đích là ngăn chặn hacker thay đổi dữ liệu khi truyền đi.
 * Cách thực hiện: Client dùng thuật toán để hash dữ liệu thành signature dựa trên private key
 * BE sẽ dùng public key để verify dữ liệu truyền qua có giống với signature hay không.
 */
const crypto = require('crypto')

// Tạo chữ ký số
const sign = crypto.createSign('SHA256')
sign.update(JSON.stringify({ hieudien: 123 }))
sign.end()
const privateKey =
	'-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC1t7uMf97qFuw6\n91CwkpLKS3BRqbEcZF2fH/eyHAQT13N8DOBtsZVKEK9udbkrKNqpDHi2gw8vQI+R\nv7o4ibf8dyEwqymsU7PToZShkzVb4OUz0+RecL3xjm+gtS0t+KY3JeuO1DRjqEDJ\nyf1usq0SXDCRgvMWMDQW5rFlpX/SjBoJhQ27pK74L1iIgZdhldFoO0cHeaSaQCAD\nXMERUif9sBGJY2DUINJoMSF8vOrS1v+2lQrTPFBLXMqX+GI7fkqCLDzUfPOWdSAW\nitL2iG+iYEi1476W4w22kTqE5wjq8pFdvPJe/qzuW1xdtuFNKezhAJxLSfoTeP32\nDHBJU3h9AgMBAAECggEACkMtQILg3sfa9nziHd62kzMjIubaSEKzdi7y06hjuI/P\nMf8eK5kUV8xNGV1k+Ywt8SRxqskIXKr2O2J1t1yxEH0qhC+ebmDZw9wZDe5Hh1VS\nTGotOFeApU7d0gMkC+Js11TOZ/tnAVvOsOFgl9WtEt+JpKYdvq/hOTaKZ+BVXC68\neMA472DnMtyjdmjxCZFxRT/EAuBS5vwgVOA6DGkAwvykahgdwBw4cKc2yjAmp/hN\nURP0izxhthMJvfh7/GxfC7DiEcQu9VUrRax4umXMOJkq1+0cct4WZNIQRMKkvu8y\nHdRUJDSgYJRkj9oHFREYC1aj/Fv9+qouI+VE142OgQKBgQD04/yZ/xAF6320zD27\nsFw6R5IAw+QQbBMGaBOOpE8EDReyw9t/YLTyuGpOwHjbz9XJaDYKNylRmGWdK52C\n9AYlahNcZGA1yUP7hhtgyhIlVBR2VpUh5GiMHcerbyfAc5083y0ES/jWiVLFTY3L\nS3e6xHkPBnwUcb21cx18206pwQKBgQC99hgE6XhRxs/ARm782IlXB9+t/mTL62Gu\nEAxG+2yhvpURipkaQZaarYeS1N7Xy9i9rMzjrzooqeYeCG1R33OSCjvqP9bJP2PY\nx3bUpHoqvPXN/DdnUB654eOAhp93NNU6gj5QgjbBkpK4Fc2PHLeAnwA/4crvGMrN\nP/xUcwdlvQKBgQD022CeuaFTyfqO5Ah1ugj9XMJncXZ/1Q/QwA+N+EvpSQ4A+ERo\nQFGsvyfMRjaR0mV4VHJ0FGOD6lTvqcR8Q3JBxqZFIzfvj6YhwB1v0ZwDJuauzDOh\nB7hhIQWcLDAbBX6adquUOEI+gF/6V2kHdBXq8Lf6hglah7+fxdIeHUmyAQKBgQCt\nkHVRx6BP179qhvBRxed2xZLyf0XJrD+Lss4E7STMhD3f0SsielsI6RS+bBFQSsi2\nRXTPdANHtDS1rC12aRxHi2JDHiE5r9mi8Fz63W1iL1TH6HMWynXIkUQ04sxBNty8\noNQe61rscufrmsA+ypY/xweLVtr8q0JhVt1Oq+tOYQKBgQDwIvDU/B40ncfHncaO\n2Gq3UWvRHR2a+rn1QCSHW2DOZayB7TnV2b1bmFCS0K0h9foodRban8MFgA8tj/gL\n8Owv0uILJ8R9AiCvjE1trz/INGPPj1quEp2YJ0gbFE9RAjhnQTARax7Ig3qaXu+3\nwfYyJ5nm0pzwg3+z4o+JaY3vWw==\n-----END PRIVATE KEY-----'
const signature = sign.sign(privateKey, 'hex')

// Xác minh chữ ký số
const verify = crypto.createVerify('SHA256')
verify.update(JSON.stringify({ hieudien: 123 }))
verify.end()
const publicKey =
	'-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtbe7jH/e6hbsOvdQsJKS\nyktwUamxHGRdnx/3shwEE9dzfAzgbbGVShCvbnW5KyjaqQx4toMPL0CPkb+6OIm3\n/HchMKsprFOz06GUoZM1W+DlM9PkXnC98Y5voLUtLfimNyXrjtQ0Y6hAycn9brKt\nElwwkYLzFjA0FuaxZaV/0owaCYUNu6Su+C9YiIGXYZXRaDtHB3mkmkAgA1zBEVIn\n/bARiWNg1CDSaDEhfLzq0tb/tpUK0zxQS1zKl/hiO35Kgiw81HzzlnUgForS9ohv\nomBIteO+luMNtpE6hOcI6vKRXbzyXv6s7ltcXbbhTSns4QCcS0n6E3j99gxwSVN4\nfQIDAQAB\n-----END PUBLIC KEY-----'
const isVerified = verify.verify(publicKey, signature, 'hex')

console.log(`Chữ ký có hợp lệ: ${isVerified}`)
