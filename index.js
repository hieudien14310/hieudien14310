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
async function getInformationLeetCode() {
	const data = await axios.default
		.post(
			'https://leetcode.com/graphql/',
			'{"query":"\\n    query userSessionProgress($username: String!) {\\n  allQuestionsCount {\\n    difficulty\\n    count\\n  }\\n  matchedUser(username: $username) {\\n    submitStats {\\n      acSubmissionNum {\\n        difficulty\\n        count\\n        submissions\\n      }\\n      totalSubmissionNum {\\n        difficulty\\n        count\\n        submissions\\n      }\\n    }\\n  }\\n}\\n    ","variables":{"username":"tranhieu14310"},"operationName":"userSessionProgress"}',
			{
				headers: {
					accept: '*/*',
					'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
					authorization: '',
					'content-type': 'application/json',
					'sec-ch-ua':
						'"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
					'sec-ch-ua-mobile': '?0',
					'sec-ch-ua-platform': '"Linux"',
					'sec-fetch-dest': 'empty',
					'sec-fetch-mode': 'cors',
					'sec-fetch-site': 'same-origin',
					'x-csrftoken':
						'B2AyVJu7nIpKlTaNN8L2mWdeIOTqBQhdtCbj9QVzz9dpOAJDY8fC4vhqQKfaKVAE',
					cookie:
						'gr_user_id=361d7728-7488-4a48-9d5c-a5ced9b347e5; 87b5a3c3f1a55520_gr_last_sent_cs1=tranhieu14310; __stripe_mid=0850e057-4dc2-4047-b28c-2a94cde7b6c81214ef; _ga_DKXQ03QCVK=GS1.1.1629174406.1.0.1629174407.59; _ga=GA1.2.2013233496.1626421776; __atuvc=41%7C31%2C35%7C32%2C34%7C33%2C34%7C34%2C18%7C35; csrftoken=B2AyVJu7nIpKlTaNN8L2mWdeIOTqBQhdtCbj9QVzz9dpOAJDY8fC4vhqQKfaKVAE; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMzMzNjYyNiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImFkY2IyZjEzNWQ4ZTkyMDhhYjhmNDQ5NDMzZTU4YTIyNDIwMDMwMjQiLCJpZCI6MzMzNjYyNiwiZW1haWwiOiJ0cmFuaGlldTE0MzEwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidHJhbmhpZXUxNDMxMCIsInVzZXJfc2x1ZyI6InRyYW5oaWV1MTQzMTAiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvdHJhbmhpZXUxNDMxMC9hdmF0YXJfMTYyMzY3OTMyMi5wbmciLCJyZWZyZXNoZWRfYXQiOjE2MzcxNDA2NzUsImlwIjoiMjQwNTo0ODAzOmM4NWM6YjdkMDo0M2E5OmU5Yjk6OGVmMTo1ZTI4IiwiaWRlbnRpdHkiOiJiOTlmZWYzNTNiMmZhZGRlMWRiYjAxMzg3ZDhhODNiOSIsInNlc3Npb25faWQiOjE0NTQ1MTc3fQ.o6dq09LRA7R-vyh4irIhoGkep8hvPsKRs8QsFRW3eZs; _gid=GA1.2.771588167.1637304152; 87b5a3c3f1a55520_gr_session_id=f405fdce-a26b-47b0-b8f8-64cce85c4e46; 87b5a3c3f1a55520_gr_last_sent_sid_with_cs1=f405fdce-a26b-47b0-b8f8-64cce85c4e46; 87b5a3c3f1a55520_gr_session_id_f405fdce-a26b-47b0-b8f8-64cce85c4e46=true; NEW_PROBLEMLIST_PAGE=1; 87b5a3c3f1a55520_gr_cs1=tranhieu14310',
					Referer: 'https://leetcode.com/problemset/all/',
					'Referrer-Policy': 'strict-origin-when-cross-origin',
				},
			},
		)
		.then((res) => res.data)
	return data
}

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
**Author's quote - ${author}**
<p align="left" style="color:tomato;">

\`${quote}\`
</p>

<p align="right"><i>Thank you for visting to my github profile. Hope someday, you'll come back here again <img src="https://media4.giphy.com/media/iGYfRROBeDccvEaREx/giphy.gif" width="35px"></i></p>
`
	fs.writeFileSync('README.md', content)
}

async function main() {
	// getInformationLeetCode()
	generate()
}
main()
