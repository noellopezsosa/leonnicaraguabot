import React from "react";
import "./styles.css";
import { Context, Telegraf } from "telegraf";

export default function App() {
  const bot = new Telegraf("1561777257:AAHy-CmO7WIRjyerZQjm5qgNOVf6K6fwNJ8");

  bot.start((ctx) => {
    let name = ctx.update.message.from.first_name;
    ctx.reply("Hola " + name + ", quieres saber algo sobre León, Nicaragua");
  });

  bot.use((ctx) => {
    console.warn(ctx);
    let texto = ctx && ctx.update && ctx.update.message && ctx.update.message.text && ctx.update.message.text;
    let chatt =  ctx && ctx.update && ctx.update.message && ctx.update.message.new_chat_member;

    if(chatt !== undefined)
    {
      return ctx.reply("✋ Bienvenid@ ✋ " + chatt.first_name + " " + chatt.last_name + " ✋");
    }

    if (texto.includes("@") || texto.includes("t.me") || texto.includes("https://t.me")) {
      return ctx.deleteMessage(ctx.update.message.message_id);
    }

  });

  bot.launch();

  return (
    <div className="App">
    </div>
  );
}
