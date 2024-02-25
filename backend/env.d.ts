declare module 'global' {
    global {
        namespace NodeJS {
            interface ProcessEnv {}
        }
    }
}
