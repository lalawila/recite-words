import http from "./http"

export async function getTask(): Promise<ApiGetTask> {
    const response = await http.get("/task")
    return response.data
}

export enum TaskResult {
    new = "new",
    remember = "remember",
    forget = "forget",
}

export async function setTaskResult(
    taskId: number,
    result: TaskResult
): Promise<void> {
    await http.put(`/tasks/${taskId}`, {
        result,
    })
}
