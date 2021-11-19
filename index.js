const fs = require('fs')
const { IndexService } = require('./index.service')
//====================================================================================
const generate = async () => {
	// const { information, atNow } = await IndexService.getGlobalWeather()
	// const weatherContent = `Hi there, thank you for visiting my github. Today is ${atNow}, It is ${information.weather[0].main} and have ${information.weather[0].description}, temperature is ${information.main.temp} °C`
	{
		/* <img src="https://openweathermap.org/img/wn/10d@2x.png" width="40px"></img> */
	}
	const content = `### Hi there!!! <img src="https://raw.githubusercontent.com/ShahriarShafin/ShahriarShafin/main/Assets/hi.gif" width="25px"> <img src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1145360/db6144fa6b4cf2dcacd9d2812b652ee27991a551.png" width="130px" height="130px" align="right">
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
