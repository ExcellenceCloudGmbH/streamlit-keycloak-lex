declare namespace svelteHTML {
    interface HTMLAttributes<T> {
        'on:loggedin'?: (event: CustomEvent) => void
    }
}
