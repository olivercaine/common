/**
 * Takes an event listener function, prevents bubbling, then returns original event listener
 * Example use: `onClick={suppressEvent(() => this.handleClick('param'))}`
 * @param {function} eventListener The event handler callback (usually what is passed to onClick).
 */
export function preventDefaultWrap(eventListener: (event) => void) {
    return (event) => {
        event.preventDefault();
        event.stopPropagation();
        return eventListener(event);
    };
}
