function render(reactElement, containerDOMElement){

    // creat a DOM element 
    const domElement = document.createElement(reactElement.type)

    // update properties 
    /* domElement.innerText ... this line adds the children text inside the DOM element (<a> </a>) */
    domElement.innerText = reactElement.children; 
    // the DOM element becomes:  <a>Read more on wikipedia</a>

    // this loop adds the props as attributes 
    for (const key in reactElement.props){
        const value = reactElement.props[key];
        domElement.setAttribute(key, value);

        /*
        Ist loop: 
        key = "id"
        value = "some-link"
        2nd loop: 
        key = "data-number"
        value = 20
        3rd loop: 
        key = "href"
        value = "https://wikipedia.org/"
        after render runs, it becomes: 
        <div id="root">
          <a
            id="some-link"
            data-number="20"
            href="https://wikipedia.org/"
          >
            Read more on wikipedia
          </a>
        </div>
        */
    }
    // put it in the container 
    containerDOMElement.appendChild(domElement)
}

/*
Object : reactElement 
this object says: create an <a> tage, give it these attributes: id, data-number, href. 
Put this text inside it : Read more on wikipedia 
*/
const reactElement = {
    type: 'a',
    props: {
        id: 'some-link',
        'data-number': 20, 
        href: 'https://wikipedia.org/',
    },
    children: 'Read more on wikipedia',
};

// containerDOMElement: the real DOM element where we want to put the object (reactElement)
const containerDOMElement = document.querySelector('#root');

render(reactElement, containerDOMElement);

