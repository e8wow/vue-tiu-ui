<template>
    <div class="vc-ripple-ink" :style="{'color': color}"></div>
</template>

<script>
/**
     * Adapted from rippleJS (https://github.com/samthor/rippleJS)
     * removed jQuery
     *
     * Version: 1.0.3
     */
import classlist from '../libs/classList'

let startRipple = function startRipple (eventType, event) {
    let holder = event.currentTarget || event.target
    if (!classlist.has(holder, 'vc-ripple-ink')) {
        holder = holder.querySelector('.vc-ripple-ink')
        if (!holder) return
    }
    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double-
    // ripples from mousedown/touchstart.
    let prev = holder.getAttribute('data-ui-event')
    if (prev && prev !== eventType) return
    holder.setAttribute('data-ui-event', eventType)
    // Create and position the ripple
    let rect = holder.getBoundingClientRect()
    let x = event.offsetX
    let y
    if (x !== undefined) {
        y = event.offsetY
    } else {
        x = event.clientX - rect.left
        y = event.clientY - rect.top
    }
    let ripple = document.createElement('div')
    let max
    if (rect.width === rect.height) {
        max = rect.width * 1.412
    } else {
        max = Math.sqrt(
            (rect.width * rect.width) + (rect.height * rect.height)
        )
    }
    let dim = `${max * 2}px`
    ripple.style.width = dim
    ripple.style.height = dim
    ripple.style.left = `${-max + x}px`
    ripple.style.top = `${-max + y}px`
    // Activate/add the element
    ripple.className = 'ripple'
    holder.appendChild(ripple)
    setTimeout(() => {
        classlist.add(ripple, 'held')
    }, 0)
    let releaseEvents = eventType === 'mousedown' ? ['mouseup', 'mousemove'] : ['touchend', 'touchmove', 'touchcancel']
    let release = () => {
        releaseEvents.forEach((releaseEvent) => {
            document.removeEventListener(releaseEvent, release)
        })
        classlist.add(ripple, 'done')
        // Larger than the animation duration in CSS
        setTimeout(function () {
            holder.removeChild(ripple)
            if (!holder.children.length) {
                classlist.remove(holder, 'active')
                holder.removeAttribute('data-ui-event')
            }
        }, 450)
    }
    releaseEvents.forEach((releaseEvent) => {
        document.addEventListener(releaseEvent, release)
    })
}
let handleMouseDown = (e) => {
    // Trigger on left click only
    if (e.button === 0) {
        startRipple(e.type, e)
    }
}
let handleTouchStart = (e) => {
    if (e.changedTouches) {
        e.changedTouches.forEach((touch) => {
            startRipple(e.type, touch)
        })
    }
}
export default {
    name: 'ripple',
    props: {
        color: {
            type: String,
            default: 'rgba(150,150,150,0.3)'
        }
    },
    mounted () {
        this.initialize()
    },
    beforeDestory () {
        this.$parent.$el.removeEventListener('touchstart', handleTouchStart)
        this.$parent.$el.removeEventListener('mousedown', handleMouseDown)
    },
    methods: {
        initialize () {
            if (this.$parent.$el) {
                this.$parent.$el.addEventListener('touchstart', handleTouchStart)
                this.$parent.$el.addEventListener('mousedown', handleMouseDown)
            }
        }
    }
}
</script>

<style lang="scss">
    .vc-ripple-ink {
        display: block;
        overflow: hidden;
        border-radius: inherit;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // Forces webkit to properly contain content within border-radius
        -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
    }

    .vc-ripple-ink .ripple {
        position: absolute;
        width: 0;
        height: 0;
        pointer-events: none;
        user-select: none;
        border-radius: 50%;
        background-color: currentColor;
        background-clip: padding-box;
        transform: scale(0);
        transition: transform 0.4s ease-out, opacity 0.4s ease-out;
        &.held {
            transform: scale(1);
        }
        &.done {
            opacity: 0 !important;
        }
    }
</style>
