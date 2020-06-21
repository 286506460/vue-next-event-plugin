# Vue-Next-Event-Plugin

> Vue 2.x $on/$off/\$emit

## Getting Started

```sh
$ npm install --save vue-next-event-plugin
```

## Usage

```javascript
import { createApp } from 'vue'
import VueNextEventPlugin from 'vue-next-event-plugin'

const app = createApp({
	name: 'App',
	template: `...`,
	setup() {
		return {}
	},
})

app.use(VueNextEventPlugin)
app.mount('#app')
```

## Examples

In Component A:

```javascript
import { defineComponent, inject } from 'vue'

export default defineComponent({
	name: 'CompA',
	setup(props, context) {
		const $event = inject('$event')

		$event.on('hello', (params) => {
			console.log(params)
		})

		return {}
	},
})
```

In Component B:

```javascript
import { defineComponent, inject } from 'vue'

export default defineComponent({
	name: 'CompB',
	setup(props, context) {
		const $event = inject('$event')

		$event.emit('hello', 'Hello, from Component B')

		return {}
	},
})
```

## API

### on( event, handler )

- Arguments

  - `{ string | Array<string> } event`
  - `{ Function } handler`

- Usage

  Listen for a custom event on the root instance.

- Example

  ```javascript
  const $event = inject('$event')

  $event.on('hello', (params) => {
  	console.log(params)
  })
  ```

### off( event, handler )

- Arguments

  - `{ string | Array<string> } event`
  - `{ Function } handler`

- Usage

  Remove custom event listener.

- Example

  ```javascript
  const $event = inject('$event')

  $event.off() // remove all
  $event.off('eventA') // remove all hanlders for eventA
  $event.off('eventA', handler) // remove current handler for eventA
  $event.off(['eventA', 'eventB']) // remove all hanlders for eventA & eventB
  ```

### emit( eventName, […args] )

- Arguments

  - `{ string } eventName`
  - `{ any } […args]`

- Usage

  Trigger an event.

- Example

  ```javascript
  const $event = inject('$event')

  $event.emit('eventA', 'This is eventA')
  ```

## License

[MIT](https://opensource.org/licenses/MIT)
