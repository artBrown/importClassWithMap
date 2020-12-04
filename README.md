# importClassWithMap

    v1.0.0 Dec 02, 2020 // branch init    
````
> git clone https://github.com/artBrown/importClassWithMap.git
> cd importClassWithMap/js.lib.test
> nvm use v14
> npm run all
> cd ../binaryTree
> npm i
> node binaryTree.js
  ctl^c to exit (should not be necessary. this is a bug)
````
### issues with webStorm 2020.3 ('ws')
1. cannot debug imported minified code set with sourcemap info. ws debugger jumped into a 
   minified file instead of an original source code.
1. cannot import class as a class. imported BinaryTree class in utils.BinaryTree turned to a 
   function (this may be generic.)

Thank you, Art
