
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<br />
<p align="center">
  <a href="https://github.com/Sibasis-Malla/pilot">
    <img src="https://store-images.s-microsoft.com/image/apps.2005.14057826194083709.67242c47-4fd7-4f1a-9dd6-5d93f6cc10df.f80f14c0-72ab-46ff-86cd-9d801c8e04e8?mode=scale&q=90&h=300&w=300" alt="Logo" width="130">
  </a>

  <h3 align="center">Tic Tac Toe</h3>

  <p align="center">
    The server repository for the website of PILOT
    <br />
    <a href="https://project-sam-tictactoe.vercel.app/">View Live</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      </ul>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-the-project">Running the project</a></li>
      </ul>
    </li>
    <li><a href="#problems-faced">Problems Faced</a></li>
    <li><a href="#contributors-">Contributors</a></li>
  </ol>
</details>

## About The Project

The Tic-Tac-Toe Game

## Built With

Following technologies and libraries are used for the development of this website
  
### Frontend
- [React](https://reactjs.org/) : Used for building the interfaces for the project due to various features like reusable components etc.
- [Axios](https://axios-http.com/docs/intro) : Used on the client side so that data can be fetched using APIs.
- [Redux Toolkit](https://redux-toolkit.js.org/) : Used for managing the state of the game and players in the project.
- [TailwindCSS](https://tailwindcss.com/) : Used for adding CSS to the pages of the website.

### Backend
- [Node and Express](https://nodejs.org/en/) : Used to introduce APIs in the project so that clients can interact with the backend.
- [MongoDB](https://www.mongodb.com/home) : Used as a database to store data of player details and games in the project given or updated by the user.

## Getting Started

To setup the project locally the steps below.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)

  ```sh
  # Homebrew
  brew install nodejs

  # Sudo apt
  sudo apt install nodejs

  # Packman
  pacman -S nodejs

  # Module Install
  dnf module install nodejs:<stream> # stream is the version

  # Windows (chocolaty)
  cinst nodejs.install

  ```

- [Git](https://git-scm.com/downloads)

```sh
  # Homebrew
  brew install git

  # Sudo apt
  apt-get install git

  # Packman
  pacman -S git

  # Module Install (Fedora)
  dnf install git

```


### Running the project.

The project uses NPM. It is strictly advised to stick with NPM so as to avoid dependency conflicts down the line.

```
## Install Dependencies
npm install

## Run the Project
npm run server

```

Following are the commands to remove/add new dependencies using yarn

```
## Add a new Package
npm install <package-name>

## Remove an existing Package
npm uninstall <package-name>

## Save Package as a Dev Dependency
npm install <package-name> --save-dev
```

## Problems Faced

* Problem faced in deciding the algorithm of Tic Tac Toe Game.
* Integrating various states of the game with the backend of the project.
* Handling edge cases of the states of the project.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/sambit-sankalp"><img src="https://avatars.githubusercontent.com/u/82284130?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sambit Sankalp</b></sub></a><br /><a href="https://github.com/sambit-sankalp/project-pilot/commits?author=sambit-sankalp" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
