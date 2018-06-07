How the name defines itself, a waiter service, self-attendance app constructed on react-native.

## MVP Functions

### Welcome

```
Welcome screen, and a message telling to scan the QR Code for login
```


### Generate QR Codes

```
QR Codes containing info for logging in the app, plus logging in the wi-fi connection.
Login info: Table number plus an ID for asking things.

```

### QR Code Login

```
Acess QR Code scanner for react-native
Login with QR Code Info
Login Wi-Fi connection ( acess wifi from the phone, plus connect with the qr code info)

```

### Menu

```
List a base of Data where items contain:

Name
Price
Ingredients
Photo
Ask order with this item Link ( Quantity )

```


### Orders Admin Panel

```
List a base of Orders by table number by time of requisition where items have the following select options wich could be sent by the user as the admin

Order not attended
Order attended
Order items
Order time
Order price
Order payment method

```

### STEP ONE - DEFINE DEVELOPMENT STACK

```

 Running Expo on Iphone and AndroidStudio via Exp-CLI
 Instaled Firebase
 Instaled React-Native-DotEnv
 Config WillMount on App to acess Firebase
 Installed React-Native-Base
 Installed Expobook

```

### STEP TWO - DEFINE FILES ARCHITECHTURE ( ATOMIC DESIGN )

```
    .
    ├── src
    |   ├── components 
    |      ├── atoms                              *the minor parts off app
    |      ├── molecules                          *combinations of atoms
    |      ├── organisms                          *combinations of molecules 
    |      └── screens                            *combinations
    |    ├── assets                               *images and other stuff
    |    └── constants                            *variables like margin font size and etc
    └── README.md

```



This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
