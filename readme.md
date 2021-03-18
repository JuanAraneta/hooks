# My fauvorite React hooks

## Installation

`yarn add @juanaraneta/hooks`

## useInterval(callback, interval)

`import { useInterval } from '@juanaraneta/hooks'`

If you want to use this hooks for a slider and the user need to be able to change the order you need to add a few lines of code to clear the inverval and then re set it from the default value. To do that you need to set the delay to null and the add a useEffect hook to re initiate it.

```javascript
const defaultDelay = 5000 // 5 seconds interval

const useEffect(() => {}
  !delay && setDelay(defaultDelay)
, [delay])

const [interval, setInterval] = useState(defaultDelay)

const handleChange = () => {
  setInterval(null)
  // Other stuff
}
```
