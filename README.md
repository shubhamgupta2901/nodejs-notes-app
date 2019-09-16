### Notes App

A Node.js application for taking notes which interacts with users using terminal commands.
A note is some content with a title and body. Following commands are defined:

#### Commands and required options

Every Command has some required options:

| Command          |      Description            |  Required Options |
|:----------------:|-----------------------------|------------------------------------------|
| [add](#add)      |  Add a new note             | ```title``` (string), ```body```(string) |
| [remove](#remove)|  Remove an existing note    | ```title``` (string)                     |
| [list](#list)    |  List all the notes         |                                          |
| [read](#read)    |  Read a note                | ```title``` (string)                     |


### add

```console
node app.js add --title='Film' --body='Nebraska'
```

###remove

```console
node app.js remove --title='Film'
```

###list

```console
node app.js remove --title='Film'
```

###read

```console
node app.js remove --title='Film'
```
