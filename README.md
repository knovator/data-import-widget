<div id="top"></div>

![npm](https://img.shields.io/npm/v/@knovator/data-import-widget?style=flat-square) ![npm](https://img.shields.io/npm/dt/@knovator/data-import-widget?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@knovator/data-import-widget?style=flat-square)

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">@knovator/data-import-widget</h3>

  <p align="center">
    `@knovator/data-import-widget` is built to communicate easily with `@knovator/data-import` application.
    <br />
    <a href="https://github.com/knovator/data-import-widget"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/knovator/data-import-widget">View Demo</a>
    ·
    <a href="https://github.com/knovator/data-import-widget/issues">Report Bug</a>
    ·
    <a href="https://github.com/knovator/data-import-widget/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

It provides user side of part for already generated templates and allow user to import data into their database system. For more info about backend application, please visit [knovator/data-import](https://github.com/knovator/data-import).

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [ReactJS](https://reactjs.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Babel](https://babeljs.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To use `data-import-widget` in your application you need ReactJS or NextJS application ready.

### Prerequisites

- Create empty react application if not have already.
  ```sh
  npx create-react-app my-app
  cd my-app
  npm start
  ```
- Your [Data Import](https://github.com/knovator/data-import) project should be running and also there should be atleast one template to get started.

### Installation

1. Install **Data Import Widget**, by running following command inside your applicaiton.
    ```
    npm i @knovator/data-import-widget
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

- Using `data-import-widget` is easy to use, it listens to click event on it's children and based on that it will open modal for importing files.
  ```jsx
  import DataImport from '@knovator/data-import-widget'

  function App() {
    
    return (<div>
        <DataImport >
          <button> Import data </button>
        </DataImport>
      </div>)
  }
  ```
  ![Template Selection](modal-1.png)
  ![File Upload](modal-2.png)
- Here it will load templates from your provided project. Once you choose a template it will show the option to upload the file(`.xlsx`, `.csv`). 
- After uploading a file via the Import button, the Import Data modal will be closed. In the background, it will do validation and transformation based on columns of the selected template. 
- After all that, it will call the callback URL from the template with extracted data.
- Loading thousands of data at one time is not good for the server, it'll unnecessarily use CPU  and Memory. To reduce such kind of accident it will split data into chunks of 1000 and then it will call a callback API.
  | Props               | Required ? | Type       | Use Case                                                     |
  | ------------------- | ---------- | ---------- | ------------------------------------------------------------ |
  | `onNotify`          | false      | `function` | `{type: 'success' | 'error',payload: success message or error stack}` |
  | `getAdditionalInfo` | false      | `function` | it can be used if you need to pass addition data to the proccess file |
  | `projectCode`       | true       | `string`   | You need to pass your project code to load templates.        |

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Knovator Technologies
- Twitter [@knovator](https://twitter.com/knovator)
- Web [https://knovator.com/](https://knovator.com/)

Project Link: [https://github.com/knovator/data-import-widget](https://github.com/knovator/data-import-widget)

<p align="right">(<a href="#top">back to top</a>)</p>
