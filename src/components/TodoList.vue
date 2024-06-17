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
        <ul>
            <li v-for="todo of todoListStore.tasks">
                <label :class="todo.class" :for="todo.id" @click="todoListStore.toggleCompleted(todo.id)">{{ todo.value
                    }} <button v-if="!todoListStore.checkMode" class="delete-button"
                        @click="todoListStore.deleteTask(todo.id)" />
                </label>
                <input type="checkbox" :id="todo.id" />
            </li>
        </ul>
        <form class="add-task-container" v-for="state of todoListStore.InputState"
            :on-change="todoListStore.checkInput(state.taskValue)">
            <p v-if="todoListStore.totalCountTasks <= 0">Список задач пуст. Добавьте задачу, чтобы она отобразилась в
                списке.</p>
            <textarea type="text" :maxlength="18" v-model="state.taskValue"
                placeholder="Введите наименование задачи..." />
            <p v-if="state?.error.message">{{ state.error.message }}</p>
            <button type="button" @click="todoListStore.addNewTask(state.taskValue)">Добавить</button>
        </form>
    </main>
</template>