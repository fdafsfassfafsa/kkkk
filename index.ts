import { EventsSDK, ChatSystem } from "github.com/octarine-public/wrapper/index";

const messages = [
  "В следующий раз повезет, друг",
  "Слезы — это нормально, правда",
  "Ты даже не пытался, а?",
  "Может, стоит сдаться?",
  "Что, уже плачешь?",
  "Это был твой лучший момент?",
  "Ой, опять ты умер!",
  "Ты вообще знаешь, как играть?",
  "Давай, держись, малыш",
  "Сколько можно падать?",
  "Ты уверен, что в нужной игре?",
  "Это была попытка?",
  "Ты даже не испугался?",
  "Может, пора на перерыв?",
  "Ты забыл, за кого играешь?",
  "Это был план?",
  "Ты реально думаешь, что выиграешь?",
  "Ты уверен, что не в тиме с нами?",
  "Ой, опять ты упал!",
  "Ты вообще в курсе, как играть?",
];

let isGameActive = false;

EventsSDK.on("GameStarted", () => {
  isGameActive = true;
  console.log("Игра началась. Скрипт активирован.");
});

EventsSDK.on("GameEnded", () => {
  isGameActive = false;
  console.log("Игра окончена. Скрипт деактивирован.");
});

EventsSDK.on("EntityKilled", (event) => {
  if (!isGameActive) return;

  const entity = event.Entity;
  if (!entity || !entity.IsHero) return;

  if (entity.Team === Game.GetPlayerInfo(0)?.Team) return;

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  const delay = Math.floor(Math.random() * 4000) + 3000;
  setTimeout(() => {
    ChatSystem.SendLocalMessage(randomMessage);
    console.log(`Отправлено: ${randomMessage}`);
  }, delay);
});
