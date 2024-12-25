import { Telegraf, Markup } from 'telegraf';

const TOKEN = '7661179914:AAGqUAAfHzG40FzDeXdRT0Q7rKkYR5FCGqs';

const webAppUrl = 'https://optimum-clean.web.app/';
// const webAppUrl = 'https://google.com';

const bot = new Telegraf(TOKEN)

bot.command('start', (ctx) => {
  ctx.reply(
    'Здравствуйте, вас приветствует клининговая компания Optimum Clean',
    Markup.keyboard([Markup.button.webApp('Insert your feedback', webAppUrl)]
    )
  )
})

bot.launch();
