# TheOdinProject - CV Application Solution

This is a solution to the [CV Application Solution](https://www.theodinproject.com/lessons/node-path-javascript-cv-application). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Create class component with React
- Handle inputs
- Create render lists
- Handle objects with react

### Screenshot

![](./screnshots/edit.jpg)
![](./screnshots/preview.jpg)


### Links

- Solution URL: [https://github.com/Kevo760/CV-App-React-TheOdinProject]
- Live Site URL: [https://Kevo760.github.io/CV-App-React-TheOdinProject/]

## My process

### Built with


- Flexbox
- [React](https://reactjs.org/) - JS library


### What I learned

I learned a lot by doing a good amount of researching and figuring out how I can apply it to my React App. The hardest was being able to edit the data inside a specific data inside an object with React. I found out that you can not mutate it directly or it will not work. With research I figured out you have to use the prevState to capture the old data and put the new data within the useState method.
I also had no clue on how to use state functions on regular functional components, but with a little help I figured out how it worked and was pretty straight forward.
I also learned that you can download React libraries to help make your life easier for example being able to use 'uniqid' to create a unique id. I am looking forward to learning more.


```js
handleGeneralChange = e => {
  let name = e.target.name
  let value = e.target.value

  this.setState(prevState => ({
    general : {
      ...prevState.general,
      [name]: value
    }
  }))
}
```

### Continued development

I would like to learn more on how to make my code look cleaner so it does not look cluttered. I would like to learn more to how useState works on objects because that is what got me confused for good amount of time. 



### Useful resources

- [Stackoverflow](https://www.stackoverflow.com)
- [Dev.to](https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el)
- [React main website](https://reactjs.org/community/external-resources.html)


## Author

- Twitter - [@CodeKevo](https://www.twitter.com/CodeKevo)
