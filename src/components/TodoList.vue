<script setup>
import { useTodoListStore } from '../store'
const todoListStore = useTodoListStore()
</script>
<template>
    <main>
        <div class="date-and-redaction-button">
            <h1>Сегодня</h1>
            <button v-for="redaction of todoListStore.redactionMode" @click="todoListStore.changeRedactionMode">{{
                redaction.name }}</button>
        </div>
        <div class="tasks-list-container">
            <ul class="tasks-list">
                <li v-for="todo of todoListStore.tasks">
                    <label :for="todo.id" @click="() => {
                if (todoListStore.checkRedactionMode) todoListStore.toggleCompleted(todo.id)
            }">
                        <button :class="todo.class" class="check-button" v-if="todoListStore.checkRedactionMode" />
                        <button v-if="!todoListStore.checkRedactionMode" class="delete-button"
                            @click="todoListStore.deleteTask(todo.id)" />{{ todo.value }}
                    </label>
                </li>
                <p v-if="todoListStore.totalCountTasks <= 0">Список задач пуст. Добавьте задачу, чтобы она отобразилась
                    в
                    списке.</p>
            </ul>
        </div>
        <button class="add-task-button" v-if="todoListStore.checkRedactionMode"
            @click="todoListStore.changeAddTaskHiddenState()">Добавить
            задачу</button>
        <div v-if="todoListStore.checkAddTaskHidden" class="add-task-container"
            v-for="state of todoListStore.InputState" :on-change="todoListStore.checkInput(state.taskValue)">
            <textarea type="text" :maxlength="18" v-model="state.taskValue"
                placeholder="Введите наименование задачи..." />
            <p v-if="state?.error.message">{{ state.error.message }}</p>
            <div>
                <button type="button" @click="todoListStore.addNewTask(state.taskValue)">Добавить</button>
                <button @click="todoListStore.changeAddTaskHiddenState()">Отмена</button>
            </div>
        </div>
    </main>
</template>