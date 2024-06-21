<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../store'
const todoListStore = useTodoListStore()
const stateTaskValue = ref("")
const stateTaskId = ref(null);

function iteratingTasks(todo) {
    stateTaskValue.value = todo.value;
    stateTaskId.value = todo.id
}

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
                <li v-for="todo in todoListStore.tasks">
                    <label :class="todoListStore.checkRedactionMode && todo.class" :for="todo.id" @click="() => {
                if (!todoListStore.checkRedactionMode) {
                    todoListStore.changeRedactionModalTaskVisible()
                    iteratingTasks(todo)
                }
            }">
                        {{ todo.value }}
                    </label>
                    <input type="checkbox" :id="todo.id"
                        :onChange="() => { if (todoListStore.checkRedactionMode) todoListStore.toggleCompleted(todo.id) }" />
                    <button v-if="!todoListStore.checkRedactionMode" class="delete-button"
                        @click="todoListStore.deleteTask(todo.id)" />
                </li>
            </ul>
            <p v-if="todoListStore.totalCountTasks <= 0">Список задач пуст. Добавьте задачу, чтобы она отобразилась
                в
                списке.</p>
        </div>
        <button class="add-task-button" v-if="todoListStore.checkRedactionMode"
            @click="todoListStore.changeAddTaskHiddenState()">Добавить
            задачу</button>
        <div class="edit-task-container-wrapper" v-if="todoListStore.checkRedactionModalTaskVisible">
            <div class="edit-task-container">
                <input v-model="stateTaskValue" />
                <div class="edit-cancel-buttons-container">
                    <button type="button"
                        @click="todoListStore.editTaskValue(stateTaskValue, stateTaskId)">Изменить</button>
                    <button @click="todoListStore.changeRedactionModalTaskVisible()">Отмена</button>
                </div>
            </div>
        </div>
    </main>
</template>