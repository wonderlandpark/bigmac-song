const { Client } = require('discord.js')

const client = new Client()

client.login(process.env.BigMacBotToken)

client.on('ready', () => {
  console.log(`Ready! (as ${client.user.tag})`)
  client.user.setActivity()
})

client.on('message', (msg) => {
  if (msg.content === '!빅맥송') {
    msg.channel.send('🍞 참깨빵 위에\n🥩 순쇠고기 패티 두 장\n🥬 특별한 소스 양상추\n🧀 치즈\n🥒 피클\n🧅 양파까지\n\n🍔 빠빰빠라빰~')
  }
})
