import React from "react";

export function useAutofocus<T extends HTMLElement>() {
    const ref = React.useRef<T>(null);
    React.useEffect(() => {
        ref.current?.focus();
    }, [ref]);

    return ref;
}
