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
	try {
		const leetcode = await axios.default
			.post(
				'https://leetcode.com/graphql',
				'{"operationName":"getUserProfile","variables":{"username":"tranhieu14310"},"query":"query getUserProfile($username: String!) {\\n  allQuestionsCount {\\n    difficulty\\n    count\\n    __typename\\n  }\\n  matchedUser(username: $username) {\\n    username\\n    socialAccounts\\n    githubUrl\\n    contributions {\\n      points\\n      questionCount\\n      testcaseCount\\n      __typename\\n    }\\n    profile {\\n      realName\\n      websites\\n      countryName\\n      skillTags\\n      company\\n      school\\n      starRating\\n      aboutMe\\n      userAvatar\\n      reputation\\n      ranking\\n      __typename\\n    }\\n    submissionCalendar\\n    submitStats: submitStatsGlobal {\\n      acSubmissionNum {\\n        difficulty\\n        count\\n        submissions\\n        __typename\\n      }\\n      totalSubmissionNum {\\n        difficulty\\n        count\\n        submissions\\n        __typename\\n      }\\n      __typename\\n    }\\n    badges {\\n      id\\n      displayName\\n      icon\\n      creationDate\\n      __typename\\n    }\\n    upcomingBadges {\\n      name\\n      icon\\n      __typename\\n    }\\n    activeBadge {\\n      id\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n"}',
				{
					headers: {
						accept: '*/*',
						'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
						'content-type': 'application/json',
						'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
						'sec-ch-ua-mobile': '?0',
						'sec-ch-ua-platform': '"Linux"',
						'sec-fetch-dest': 'empty',
						'sec-fetch-mode': 'cors',
						'sec-fetch-site': 'same-origin',
						'x-csrftoken': 'B2AyVJu7nIpKlTaNN8L2mWdeIOTqBQhdtCbj9QVzz9dpOAJDY8fC4vhqQKfaKVAE',
						'x-newrelic-id': 'UAQDVFVRGwEAXVlbBAg=',
						cookie:
							'gr_user_id=361d7728-7488-4a48-9d5c-a5ced9b347e5; 87b5a3c3f1a55520_gr_last_sent_cs1=tranhieu14310; __stripe_mid=0850e057-4dc2-4047-b28c-2a94cde7b6c81214ef; _ga_DKXQ03QCVK=GS1.1.1629174406.1.0.1629174407.59; _ga=GA1.2.2013233496.1626421776; csrftoken=B2AyVJu7nIpKlTaNN8L2mWdeIOTqBQhdtCbj9QVzz9dpOAJDY8fC4vhqQKfaKVAE; _gid=GA1.2.771588167.1637304152; __atuvc=0%7C42%2C0%7C43%2C0%7C44%2C0%7C45%2C3%7C46; LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMzMzNjYyNiIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImFkY2IyZjEzNWQ4ZTkyMDhhYjhmNDQ5NDMzZTU4YTIyNDIwMDMwMjQiLCJpZCI6MzMzNjYyNiwiZW1haWwiOiJ0cmFuaGlldTE0MzEwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoidHJhbmhpZXUxNDMxMCIsInVzZXJfc2x1ZyI6InRyYW5oaWV1MTQzMTAiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvdHJhbmhpZXUxNDMxMC9hdmF0YXJfMTYyMzY3OTMyMi5wbmciLCJyZWZyZXNoZWRfYXQiOjE2MzczMTM2NDgsImlwIjoiMjQwNTo0ODAzOmM4NDA6NWQ4MDpmMjk2OmFjNGI6ZGNhMzpjZTE1IiwiaWRlbnRpdHkiOiJiOTlmZWYzNTNiMmZhZGRlMWRiYjAxMzg3ZDhhODNiOSIsInNlc3Npb25faWQiOjE0NTQ1MTc3fQ.G9gj2e9uNlR0m8SlqUmZI1YrpkokYoDZ5jCTx8MjvEs; 87b5a3c3f1a55520_gr_session_id=5f230f47-8724-4b69-8621-5dc3f2c45d0f; 87b5a3c3f1a55520_gr_last_sent_sid_with_cs1=5f230f47-8724-4b69-8621-5dc3f2c45d0f; 87b5a3c3f1a55520_gr_session_id_5f230f47-8724-4b69-8621-5dc3f2c45d0f=true; 87b5a3c3f1a55520_gr_cs1=tranhieu14310',
						Referer: 'https://leetcode.com/tranhieu14310/',
						'Referrer-Policy': 'strict-origin-when-cross-origin',
					},
				},
			)
			.then((res) => res.data.data)
		return leetcode
	} catch (error) {
		return null
	}
}

const generateReadme = async (leetcode) => {
	const [acAll, acEasy, acMedium, acHard] = leetcode.matchedUser.submitStats.acSubmissionNum
	const [alAll, alEasy, alMedium, alHard] = leetcode.allQuestionsCount

	const informationLeetCode = () => {
		return `
Leetcode: ${acAll.count} / ${alAll.count}
- <span style="color: green"><b>Easy</b></span>: ${acEasy.count} / ${alEasy.count}
- <span style="color: rgb(251, 140, 0)"><b>Medium</b></span>: ${acMedium.count} / ${alMedium.count}
- <span style="color: red"><b>Hard</b></span>: ${acHard.count} / ${alHard.count}`
	}

	const { quote, author } = await getQuote()
	const birthday = [10, 3, 1996]
	const dayNow = new Date(Date.now()).toLocaleDateString('en-VN')
	const currently = dayNow.split('/')
	const days = Math.round((new Date(currently[2], currently[0] - 1, currently[1]) - new Date(birthday[2], birthday[0] - 1, birthday[1])) / (1000 * 60 * 60 * 24))
	if (!quote) return
	const content = `
Hi, I'm <b>Tran Trung Hieu</b>, a passionate self-taught Full Stack Web Developer with 2 years of experience 🚀.
<br>
<br>

${leetcode ? informationLeetCode() : ''}

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
	const leetcode = await getInformationLeetCode()

	generateReadme(leetcode)
}
main()
