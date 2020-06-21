<template>
	<h1>CompB</h1>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { EventPlugin } from '/@dist/index'

const compA = defineComponent({
	name: 'CompB',
	setup(props, context) {
		const $event = inject<EventPlugin>('$event')
		$event.emit('onCompB1', 'this is CompB1')
		$event.emit('onCompB2', 'this is CompB2')
		return {}
	},
})
export default compA
</script>
