# Vaccinator Phaser Game (Javascript)

A mini game using Phaser framework with Javascript. Phaser lets you create games using HTML5 Canvas feature.
In this game you have to avoid being touched by the covid viruses falling down from sky.

Each virus that reachs the ground withouth touching your character, is gonna add points to your score.
Difficulty increases when you are getting a bigger score.

The game is using an API to save high scores on leaderboard and also to show it.

![Vaccinator](https://i.imgur.com/576EKkD.jpg)

## LIVE DEMO
You can play the live demo here: [Play Live Demo Now](http://sergioobolevich.me/Vaccinator-Phaser-Game/dist/)

## Built With

- HTML + CSS
- JavaScript
- Phaser Library (Phaser.io)
- Webpack + NPM
- JEST (Testing)
- ESLINT + STYLELINT

## How to play?

Please select PLAY option using your mouse pointer and clicking on it.
Once the game is loaded you can play using just the keyboard arrows (left, up, right).
You can move the character to the right or left. To jump, press the up arrow key.

You can jump twice with your character when he is healthy.
Note that you can only touch virus twice: first time the character status will change to "infected" and you will be able to jump just one time. Also the character will be slower. Second time you touch a virus, you'll.... game over.

## Getting Started

To get a local copy up and running follow these simple example steps.

# Instructions (Set Up)

Clone this repository in your computer
```
$  git clone https://github.com/chubaquelo/Vaccinator-Phaser-Game
```
Access the folder where you cloned the project in your explorer and open ./dist/index.html for direct opening.

If you want to modify the source code, please install dependencies after cloning the repository.
You can do so by calling this commands from root folder (make sure you have Node / NPM installed on your PC):
```
$  npm install
```
To compile the code inside ./src folder into ./dist folder, do so by calling webpack as follows:
```
$  npx webpack
```

## Authors

👤 **Sergio Obolevich**

- Github: [@chubaquelo](https://github.com/chubaquelo)
- Twitter: [@sergioobolevich](https://twitter.com/SergioObolevich)
- Linkedin: [sergio-obolevich](https://www.linkedin.com/in/sergio-obolevich/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to check the issues page.

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://www.microverse.org/).
- Game Background: https://craftpix.net/

## 📝 License

This project is [MIT licensed](https://github.com/chubaquelo/Vaccinator-Phaser-Game/blob/form/LICENSE).
