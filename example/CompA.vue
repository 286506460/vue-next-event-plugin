<template>
	<h1>CompA</h1>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { EventPlugin } from '/@dist/index'

const compA = defineComponent({
	name: 'CompA',
	setup(props, context) {
		const $event = inject<EventPlugin>('$event')
		$event.on(['onCompB1', 'onCompB2'], (params) => {
			console.log(params)
		})
		$event.on('onCompB1', (params) => {
			console.log(params)
		})
		// $event.off()
		return {}
	},
})
export default compA
</script>
