const unicoder = require('./unicoder')
const substring = require('unicode-substring')
class UnicoderInput extends EventTarget {
    constructor(element, opts) {
        super()
        if (!opts) opts = {}
        Object.assign(this, {
            sansSerif: true
        }, opts)
        this.element = element
        element.addEventListener('keydown', this.handleKeypress.bind(this))
    }

    handleKeypress(event) {
        const key = [
            event.ctrlKey ? 'Ctrl' : null,
            event.altKey ? 'Alt' : null,
            event.shiftKey ? 'Shift' : null,
            event.code && event.code.startsWith('Key') ? event.code.substr(3) : event.code
        ].filter(x => x).join('-')
        console.log(key)
        const start = this.element.selectionStart
        const end = this.element.selectionEnd
        const original = this.element.value.substring(start, end)
        let flag
        switch (key) {
            case 'Ctrl-B': flag = 'bold'; break
            case 'Ctrl-I': flag = 'italic'; break
            case 'Ctrl-D': flag = 'doubleStruck'; break
            case 'Ctrl-Slash': flag = 'script'; break
            default: return
        }
        event.preventDefault()
        const text = unicoder.toggleFlag(original, flag, { sansSerif: true })
        this.element.value = this.element.value.substring(0, start) + text + this.element.value.substring(end)
        this.element.selectionStart = start
        this.element.selectionEnd = end + (text.length - original.length)
    }
}

if (typeof window !== 'undefined') window.UnicoderInput = UnicoderInput
module.exports = UnicoderInput