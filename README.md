### Overview

Dialog-like interactions with stdin/stdout or other [readline interfaces](https://nodejs.org/dist/latest/docs/api/readline.html#readline) for [NodeJS](https://nodejs.org).

### Installation

```
npm i @aminzer/readline-dialogs
```

### API

**prompt**

##### Overview

`prompt` is used to fetch user's answer from passed input stream (process.stdin by default).

```javascript
const answer = await prompt('Enter your name:');
// entering answer in process.stdin
console.log(`Answer is: ${answer}`);
```

##### Parameters

* `title` (`string`, required) - title of the prompt.
* `opts` (`object`, optional) - additional options to pass:
    * `possibleAnswers` (`string[]`, `undefined` by default) - answers that can be accepted. If user enters something not included into this arg - the prompt will be shown again.
    * `input` (`Readable`, `process.stdin` by default) - input stream for [readline interface](https://nodejs.org/dist/latest/docs/api/readline.html#readline).
    * `output` (`Writable`, `process.stdout` by default) - output stream for [readline interface](https://nodejs.org/dist/latest/docs/api/readline.html#readline).

##### Return value

`Promise` that becomes fulfilled with user's answer.

**confirm**

##### Overview

`confirm` is used to check user's confirmation from passed input stream (process.stdin by default).

```javascript
const answer = await confirm('Are you sure you want to continue:');
// entering answer in process.stdin
console.log(answer ? 'Processing...' : 'Terminating...');
```

##### Parameters

* `title` (`string`, required) - title of the confirm.
* `opts` (`object`, optional) - additional options to pass:
    * `input` (`Readable`, `process.stdin` by default) - input stream for [readline interface](https://nodejs.org/dist/latest/docs/api/readline.html#readline).
    * `output` (`Writable`, `process.stdout` by default) - output stream for [readline interface](https://nodejs.org/dist/latest/docs/api/readline.html#readline).

##### Return value

`Promise` that becomes fulfilled with boolean based on user's answer.

**alert**

##### Overview

`alert` is used to wait for user's entering new-line symbol from passed input stream (process.stdin by default).

```javascript
await alert('Press enter to continue:');
// entering new-line symbol in process.stdin
```

##### Parameters

* `title` (`string`, required) - title of the alert.
* `opts` (`object`, optional) - additional options to pass:
    * `input` (`Readable`, `process.stdin` by default) - input stream for [readline interface](https://nodejs.org/dist/latest/docs/api/readline.html#readline).
    * `output` (`Writable`, `process.stdout` by default) - output stream for [readline interface](https://nodejs.org/dist/latest/docs/api/readline.html#readline).

##### Return value

`Promise` that becomes fulfilled after user enters new-line char.
