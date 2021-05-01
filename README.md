# botwa

✔️ SELF BOT

### This project require NodeJS v14.
This is a Bot Group Type, so you have to enter the bot into a group in order to fully use the command!

### FFMPEG
- [DOWNLOAD](https://ffmpeg.org/)
- [TUTORIAL](https://youtu.be/04Gf6TEnmjk)
 ### for termux= pkg install ffmpeg or apt install ffmpeg
### IMAGEMAGICK
- [DOWNLOAD](https://imagemagick.org/script/download.php)


### Install
Clone this project

```bash
> git clone https://github.comrifaiganz/botwa
> cd botwa
```

Install the dependencies:

```bash
> Bash install.sh
> npm install
> npm install -g pm2
```

### Usage
1. run the Whatsapp bot

```bash
> npm start
```
or
```bash
> pm2 start run.js
> pm2 monit
```

2. stop the Whatsapp bot

for npm :
```bash
> ctrl + c
```
for pm2 :
```bash
> pm2 stop
```

after running it you need to scan the qr, if it doesn't appear, delete barbar.json

