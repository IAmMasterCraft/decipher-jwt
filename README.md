# decipher-jwt
    A simple node package that deciphers jwt token into json object

## Installation
     WITH NPM: $ npm install decipher-jwt
     With YARN: $ yarn add decipher-jwt

## Author
    Boluwaji Akinsefunmi
Published by [MasterCraft](https://github.com/IAmMasterCraft/)
    Inspired and tested by 
[Isaac Kelvin OziKelvin](https://github.com/ozikelvin)

## Usage
```javascript
    const { decipherJwt } = require("decipher-jwt");
    const jwtToken = "Bearer xxxxxxxxxxx.xxxxxxxxx.xxxxxxx";
    // it is not compulsory for the jwtToken string to contain 'Bearer' keyword
    console.log(decipherJwt(jwtToken));
```

## Outcome
### Success
<img src="images/success.png"> <br>
### Failure
<img src="images/failure.png">

## Contributions
    Pull requests are welcome. For major changes, please open an issue first 
    to discuss what you would like to change.

## License
[MIT License](./LICENSE)