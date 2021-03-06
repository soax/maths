export namespace utils {

        export enum operator  {
        CONCAT = 1, // concat is always deduced before or after "    
        ASSIGN,      // :
        EQUAL,      // =
        PLUS,       // +
        MINUS,      // -
        TIMES,      // *
        DIV,        // /
        POW,        // ^
    }

    const _to_operator = {
        '+': operator.PLUS,
        '-': operator.MINUS,
        '*': operator.TIMES,
        '/': operator.DIV,
        '^': operator.POW,
        '=': operator.EQUAL,
        ':': operator.ASSIGN
    }
    export function to_operator(c: string) {
        return _to_operator[c]
    } 

    const _is_operator = {
        '+': true,
        '-': true,
        '*': true,
        '/': true,
        '^': true,
        '=': true,
        ':': true,
    }

    const _is_space = {
        ' ': true,
        '\t': true,
    }

    const _is_separator = {
        ',': true
    }

    const _is_symbol_flag = {
        '#': true,
    }

    const _is_block = {
        '(': true,
        '[': true,
        '{': true,
    }

    const _is_block_close = {
        ')': true,
        ']': true,
        '}': true,
    }

    const _open_close = {
        '(': ')',
        '[': ']',
        '{': '}',
        '"': '"'
    }
    export function to_close(c: string) {
        return _open_close[c]
    }
    
    const _is_tex = {
        '"': true
    }

    export function is_operator(c: string) {
        return _is_operator[c] || false
    }

    export function is_space(c: string) {
        return _is_space[c] || false
    }

    export function is_separator(c: string) {
        return _is_separator[c] || false
    }

    export function is_symbol_flag(c: string) {
        return _is_symbol_flag[c] || false
    }

    export function is_number(c: string) {
        return (c >= '0' && c <= '9') || c === '-'
    }
    
    export function is_symbol(c: string) {
        return (c >= 'a' && c <= 'z')
    }

    export function is_block(c) {
        return _is_block[c] || false
    }

    export function is_tex(c) {
        return _is_tex[c] || false
    }




    export enum token {
        OPERATOR = 1,
        NUMBER,
        SYMBOL,
        BLOCK,
        SEPARATOR,
        LATEX,
        STRING
    }

    export function run_predef_math_function(f, par) {
        let _par = []
        par.forEach(p => {
            _par.push(p())
        })
        return f.call(null, _par)
    }


    export function jstr(obj) {
        return JSON.stringify(obj, null, 2)
    }

    export let log = console.log

    export function jlog(obj) {
        log(jstr(obj))
    }

    
}