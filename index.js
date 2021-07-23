const axios = require('axios')
const fs = require('fs')
//====================================================================================
const getQuote = async () => {
	try {
		const { data } = await axios.get('https://quotes.rest/qod?language=en&quot')
		const quote = data.contents.quotes[0].quote
		const author = data.contents.quotes[0].author
		return { quote, author }
	} catch (err) {
		console.error(err.message)
		return {}
	}
}
// ---
// ### My Experience 🎊️
// | Thời gian            | Company                       | Role          | Công nghệ         |
// | :---:                |     :---:                     |         :---  |          ---:     |
// |                      |                               |               |                   |
// | 7/2019 - 10/2020     | Hitachi Vantara VietNam       | git diff      | Java, Angular     |
// | 11/2020 - Present    | KINGFOOD                      | BackEnd + FrontEnd developer      | NodeJS, ReactJS, MongoDB, Docker, Microservice, Redis     |
// **Languages and Tools: 🛠️**
// <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
// <img alt="Docker" src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white" />
// <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
// <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
// <img alt="angular" src="https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white" />
// <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
// <img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
// <img alt="Prettier" src="https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
// <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
// <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
// <img alt="gitlab" src="https://camo.githubusercontent.com/35b0a4cb52ffc87fc7c464f9f2527dec988b663d0ae86bf8d542ae5649bd2c9e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4769744c61622d4643413132313f7374796c653d666c61742d737175617265266c6f676f3d6769746c6162" />
const generate = async () => {
	const { quote, author } = await getQuote()
	const birthday = [10, 3, 1996]
	const dayNow = new Date(Date.now()).toLocaleDateString('en-VN')
	const currently = dayNow.split('/')
	const days = Math.round(
		(new Date(currently[2], currently[0] - 1, currently[1]) -
			new Date(birthday[2], birthday[0] - 1, birthday[1])) /
			(1000 * 60 * 60 * 24),
	)
	if (!quote) return
	const content = `### Hey there!!! <img src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/hi.gif" width="25px"> <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1145360/db6144fa6b4cf2dcacd9d2812b652ee27991a551.png" width="130px" height="130px" align="right">
<h1 align="center"><img src="https://media.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif" height="65px" width="90px"> to my profile!!</h1>
Hi, I'm <b>Tran Trung Hieu</b>, a passionate self-taught Full Stack Web Developer with 2 years of experience 🚀.
<br>
<br>
<!--
<img align="right" alt="GIF" src="https://media1.tenor.com/images/9fb771fb621c29b0a2eae945b5ceeeb3/tenor.gif?itemid=19019116" width="500" height="320" />
--->


### <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="35px"> A little more about me: 
- Lived            🎂️: <b>${days}</b> days.
- Place of birth   🏘️: [15°07′26″B 108°48′42″Đ](https://en.wikipedia.org/wiki/Qu%E1%BA%A3ng_Ng%C3%A3i)
- Education        📖️: 👨‍🎓️.
- Major            👨‍🏫️: Software engineer.
- My hobby         😍️: 🎮️, 🏊‍♀️️, ⚽️, 🧗‍♂️️ and 🚋️.
- ...........................................
---
### My Week 🎊️

<!--START_SECTION:waka-->
<!--END_SECTION:waka-->


---
**Quote**
<p align="left" style="color:tomato;">

\`${quote}\`
</p>
<p align="right"><b>${author}</b></p>
`
	fs.writeFileSync('README.md', content)
}

generate()
