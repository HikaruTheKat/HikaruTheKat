Olá aqui será o incio de tudo desde da Criação até começar programar 

Primeiramente para você criar um Bot no discord você precisará do pela Google playstore ou loja da Apple ou para Pc 
Logo após crie a conta no app e depois entre nesse site https://discord.com/developers/applications aqui você irá clicar em New appication ponha um nome no bot e uma imagem logo após 
Clique em bot que estará nos 3 traços no lado direito logo após clique em add bot yes do It! 
Depois clique em copy lá no TOKEN e pronto o bot já está "criado".

Agora vá lá na (https://replit.com/repls) e aqui começará a mágica de verdade você irá criar uma conta lá na repl.it depois clique no + azul e em language ponha node.js 
E ponha um nome na sua repl.
Se você estiver no celular vá em commands lá em baixo depois em packager e instale essas packagers aqui(aoi.js, dotenv, express, sqile3) essas 4 procure lá na lupa quando clicar em packager 
Quando instalar os 4 vá lá em code na parte de baixo quando chegar na Index perfeito agora você irá criar a Index ponha esse código aqui:
const Aoijs = require('aoi.js');

require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (request, response) => {
  console.log('Ping foi recebido!');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const bot = new Aoijs.Bot({
  token: process.env.TOKEN,
  prefix: [`$getServerVar[prefix`]
});
bot.loadCommands(`./commands/`);
bot.variables(variables)
bot.client.setMaxListeners(50) 

bot.variables({
prefix: "seu prefixo tipo: +, -, /, g! Entre outros você decide", feito
Agora vamos criar seu token pegue aquele token que você copiou lá no discord developer e vá lá em commands e Secrets e na Key ponha TOKEN tudo maiúsculo e no value ponha seu token.
Depois volte lá em code e vá lá em filés um nome azul na esqueda clique no emoji de pasta com um + dentro e crie uma pasta chamada commands desta forma tudo minúsculo.

Agora clique no botão verde ou em run se estiver no Pc run no celular vá no botão verde e pronto seu bot está criado na nossa próxima aula estarei deixando como por no discord e criar a menção do bot.

Até a próxima agora vá lá em projects aqui no github e veja a minha história criando bot :).
