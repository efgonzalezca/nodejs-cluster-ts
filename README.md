# NodeJS cluster implementation

This repository provides a practical implementation of Node.js using the `cluster` module to improve concurrency handling and address bottlenecks in I/O-intensive applications. By leveraging all available CPU cores, this implementation distributes incoming requests among multiple worker processes, enhancing performance and scalability.

## 📄 Table of Contents

- [🚀Quickstart](#🚀quickstart)
    - [🔍Prerequisites](#🔍prerequisites)
    - [📦Dependencies](#📦dependencies)
    - [💻Development](#💻development)
- [🔧Built With](#🔧built-with)
- [👥Authors](#👥authors)
- [📜License](#📜license)

# 🚀Quickstart

## 🔍Prerequisites

Before you begin configuring and running this project, make sure you have the following components installed on your system:

1. **Git**: To clone the repository and collaborate in development.

2. **Node.js y npm**: This project is developed in Node.js, so you will need Node.js to run the code and npm to manage the dependencies.

## 📦Dependencies

This project uses the following technologies and versions:

- **Node.js**: = 22.12.0

Please keep these versions in mind when setting up your development environment.

## 💻Development

Describe how to install all development dependencies and run the application.

1. Clone this repository to your local machine.
2. Open a terminal in the project folder.
3. Run `npm install` to install project dependencies.
4. Run `npm run dev` to start the server.

Remember to create the environment variables before starting the project following the example `.env.template` in the repository.

# 🔧Built With

* [Node.js](https://nodejs.org/es)
* [TypeScript](https://www.typescriptlang.org/)
* [Express.js](https://expressjs.com/es/)

# 👥Authors

* **Efraín González** - *Software Developer*

# 📜License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.