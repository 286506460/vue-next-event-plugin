import { App } from 'vue'

export type Handler = (params?: any) => void

export type HandlerList = Array<Handler>

export type EventHandler = {
	[key: string]: HandlerList
}

export interface AppEvent extends App {
	_$events?: EventHandler
}

export interface EventPlugin {
	on(event: string | Array<string>, handler: Handler): void
	off(event: string | Array<string>, handler: Handler): void
	emit(event: string, params?: any): void
}

export default {
	install: (app: AppEvent, ...options: any[]) => {
		app._$events = Object.create(null)

		app.provide<EventPlugin>('$event', {
			on: (event: string | Array<string>, handler: Handler): AppEvent => {
				const _this = app // root instance

				function on(event: string | Array<string>, handler: Handler): AppEvent {
					if (Array.isArray(event)) {
						for (let i = 0, l = event.length; i < l; i++) {
							on(event[i], handler)
						}
					} else {
						;(_this._$events[event] || (_this._$events[event] = [])).push(handler)
					}
					return _this
				}

				return on(event, handler)
			},
			off: (event?: string | Array<string>, handler?: Handler): AppEvent => {
				const _this = app // root instance

				function off(event?: string | Array<string>, handler?: Handler): AppEvent {
					if (!event && !handler) {
						_this._$events = Object.create(null)
						return _this
					}

					if (Array.isArray(event)) {
						for (let i = 0, l = event.length; i < l; i++) {
							off(event[i], handler)
						}
						return _this
					}

					const handlers = _this._$events[event]
					if (!handlers) {
						return _this
					}
					if (!handler) {
						_this._$events[event] = null
						return _this
					}
					let hd
					let i = handlers.length
					while (i--) {
						hd = handlers[i]
						if (hd === handler) {
							handlers.splice(i, 1)
							break
						}
					}
					return _this
				}

				return off(event, handler)
			},
			emit: (event: string, ...params: any): AppEvent => {
				;((app._$events[event] || []) as HandlerList).map((handler) => handler(...params))
				return app
			},
		})
	},
}
