import {Telegraf, Markup} from 'telegraf';

const TOKEN = '7661179914:AAGqUAAfHzG40FzDeXdRT0Q7rKkYR5FCGqs';
const webAppUrl = 'https://google.com';

const bot = new Telegraf(TOKEN)
bot.command('start', (ctx) => {
  ctx.reply(
    'Клининговая компания "Optimum Clean',
    Markup.keyboard(
      [Markup.button.webApp(
        'Отправить сообщение',
        webAppUrl
      )]
    )
  )
})