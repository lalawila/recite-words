import type { Ref } from "vue"

export function useWarningMsg(
    username: Ref<string>,
    password: Ref<string>,
    passwordAgain: Ref<string>
) {
    return computed(() => {
        if (
            username.value.length > 0 &&
            (username.value.length < 3 || username.value.length > 12)
        ) {
            return "用户名必须为 3 至 12 位"
        }

        if (
            password.value.length > 0 &&
            (password.value.length < 6 || password.value.length > 12)
        ) {
            return "密码必须为 6 至 12 位"
        }

        if (
            passwordAgain.value.length > 0 &&
            passwordAgain.value !== password.value
        ) {
            return "前后密码不匹配"
        }
    })
}
