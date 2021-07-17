# decipher-jwt
    A simple node package that deciphers jwt token into json object

## Installation
     $ npm install decipher-jwt

## Author
    Boluwaji Akinsefunmi
[MasterCraft](https://github.com/IAmMasterCraft/)

## Usage
```javascript
    const { decipherJwt } = require("decipher-jwt");
    const jwtToken = "Bearer xxxxxxxxxxx.xxxxxxxxx.xxxxxxx";
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