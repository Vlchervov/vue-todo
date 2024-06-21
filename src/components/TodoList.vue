<script setup>
import { useTodoListStore } from '../store'
import { ref } from 'vue'
import AddTaskComponent from './addTaskComponent.vue';
const todoListStore = useTodoListStore()
const modalIsVisible = ref(false);

</script>
<template>
    <main>
        <div class="date-and-redaction-button">
            <h1>Сегодня</h1>
            <button v-for="redaction of todoListStore.redactionMode" @click="todoListStore.changeRedactionMode">{{
                redaction.name }}</button>
        </div>
        <div class="tasks-list-container">
            <ul class="tasks-list" v-for="todo of todoListStore.tasks">
                <li>
                    <label :for="todo.id" :class="todoListStore.checkRedactionMode && todo.class" @click="() => {
                        if (!todoListStore.checkRedactionMode) {
                            modalIsVisible = !modalIsVisible;
                            console.log(todoListStore.checkTaskValue)
                        }
                    }">
                        <!-- <button :class="todo.class" class="check-button" v-if="todoListStore.checkRedactionMode" /> -->

                        <button v-if="!todoListStore.checkRedactionMode" class="delete-button"
                            @click="todoListStore.deleteTask(todo.id)" />{{ todo.value }}
                    </label>
                    <input type="checkbox" :id="todo.id"
                        :onChange="() => { if (todoListStore.checkRedactionMode) todoListStore.toggleCompleted(todo.id) }" />
                </li>
                <div class="add-task-container-wrapper" v-if="modalIsVisible">
                    <div class="edit-task-container">
                        <input />
                        <div class="add-cancel-buttons-container">
                            <button type="button" @click="">Изменить</button>
                            <button @click="modalIsVisible = !modalIsVisible">Отмена</button>
                        </div>
                    </div>
                </div>
            </ul>
            <p v-if="todoListStore.totalCountTasks <= 0">Список задач пуст. Добавьте задачу, чтобы она отобразилась
                в
                списке.</p>
        </div>
        <button class="add-task-button" v-if="todoListStore.checkRedactionMode"
            @click="todoListStore.changeAddTaskHiddenState()">Добавить
            задачу</button>
        <AddTaskComponent :todoListStore="todoListStore" />
    </main>
</template>