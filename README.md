# what is unit testing ?

    Unit testing, a.k.a. component or module testing, is a form of software testing by which isolated source code is tested to validate expected behavior. 
     Unit testing describes tests that are run at the unit-level to contrast testing at the integration or system level

# what is enzyme ?

  Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, 
  and in some ways simulate runtime given the output.Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.


# why enzyme ?

   Enzyme provides a mechanism to mount and traverse React. js component trees. This will help us get access to its own properties and state as well as its children props in order to run our assertions. 
   Enzyme offers two basic functions for component mounting: shallow and mount


   # shallow vs mount:

       The difference between shallow() and mount() is that shallow() tests components in isolation from the child components they render
       while mount()goes deeper and tests a component's children.
       For shallow() this means that if the parent component renders another component that fails to render, then a shallow() rendering on the parent will still pass
