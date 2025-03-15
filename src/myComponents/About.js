import React from 'react'

export const About = () => {
    return (
        <>
            This is an about Component
            <p>
                React is a JavaScript library developed by Facebook that, among other things, was used to build Instagram.com. It aims to allow developers to easily create user interfaces for websites, desktop apps and mobile applications. A React application usually works fast and efficiently.
                The main concept of React.js is virtual DOM (Document Object Model). It is a tree based on JavaScript components created with React that mimics a DOM tree. It does the least amount of DOM manipulation possible to keep your React components up to date. This leads to better performance, as the DOM updates are usually the main performance bottleneck when rendering UI with Javascript.
            </p>
        </>
    )
}
