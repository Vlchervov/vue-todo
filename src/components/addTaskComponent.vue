<script setup>
const props = defineProps(['todoListStore']);
</script>

<template>
    <div class="add-task-container-wrapper" v-if="props.todoListStore.checkAddTaskHidden">
        <div class="add-task-container" v-for="state of props.todoListStore.InputState"
            :on-change="props.todoListStore.checkInput(state.taskValue)">
            <textarea type="text" :maxlength="18" v-model="state.taskValue"
                placeholder="Введите наименование задачи..." />
            <p v-if="state?.error.message">{{ state.error.message }}</p>
            <div class="add-cancel-buttons-container">
                <button type="button" @click="props.todoListStore.addNewTask(state.taskValue)">Добавить</button>
                <button @click="props.todoListStore.changeAddTaskHiddenState()">Отмена</button>
            </div>
        </div>
    </div>
</template>