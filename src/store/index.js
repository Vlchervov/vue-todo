import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todoListStore', {
    state: () => ({
        tasks: [
            { id: 0, completed: false, value: "Первый", class: "unchecked" },
            { id: 1, completed: false, value: "Второй", class: "unchecked" },
            { id: 2, completed: false, value: "Третий", class: "unchecked" },
            { id: 3, completed: false, value: "Четвёртый", class: "unchecked" },
        ],

        InputState: [
            { taskValue: '', error: { message: "" } },
        ],

        redactionMode: [
            { redaction: false, name: "Править" }
        ],

        addTaskHidden: [
            { hidden: true }
        ]
    }),
    getters: {
        totalCountTasks() {
            return this.tasks.length;
        },

        checkRedactionMode() {
            return this.redactionMode.findIndex(el => el.redaction);
        },

        checkAddTaskHidden() {
            return this.addTaskHidden.findIndex(el => el.hidden);
        }
    },
    actions: {
        toggleCompleted(id) {
            const idx = this.tasks.findIndex(el => el.id === id);
            this.tasks[idx].completed = !this.tasks[idx].completed;
            this.tasks[idx].class = this.tasks[idx].completed === true ? "checked" : "unchecked";
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(el => el.id !== id);

        },
        checkInput(value) {
            const newError = this.InputState.findIndex(el => el.error.message === el.error.message);
            if (value) {
                this.InputState[newError].error.message = '';
            }
        },
        addNewTask(value) {
            const newValue = this.InputState.findIndex(el => el.taskValue === value);
            const newError = this.InputState.findIndex(el => el.error.message === el.error.message);
            if (value) {
                this.tasks.push({
                    id: this.tasks.length + 1,
                    completed: false,
                    value: value,
                    class: "unchecked"
                })
                this.InputState[newValue].taskValue = '', this.InputState[newError].error.message = "";
            } else {
                this.InputState[newError].error.message = "Поле должно быть заполнено!";
            }
            return [...this.tasks]
        },

        changeRedactionMode() {
            const newRedaction = this.redactionMode.findIndex(el => el.redaction === el.redaction);
            this.redactionMode[newRedaction].redaction = !this.redactionMode[newRedaction].redaction;
            this.redactionMode[newRedaction].name = this.redactionMode[newRedaction].redaction === true ? "Отмена" : "Править";
            this.addTaskHidden[0].hidden = true;
        },

        changeAddTaskHiddenState() {
            this.addTaskHidden[0].hidden = !this.addTaskHidden[0].hidden;
        }
    }
})