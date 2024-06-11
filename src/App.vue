<script>
export default {
  data() {
    return {
      todoList: [
        { id: 0, completed: false, value: "Первый", class: "unchecked" },
        { id: 1, completed: false, value: "Второй", class: "unchecked" },
        { id: 2, completed: false, value: "Третий", class: "unchecked" },
        { id: 3, completed: false, value: "Четвёртый", class: "unchecked" },
      ]
    }
  },
  methods: {
    changeClass(value) {
      this.todoList.map((i) => {
        if (value == i.value) {
          i.class = i.completed === false ? 'checked' : 'uncheked',
            i.completed = !i.completed;
        }
        return i;
      })
    }
  }
}
</script>
<template>
  <main>
    <h1>Сегодня</h1>
    <label v-for="(el, index) in todoList" :key="index" :class="el.class" @click="changeClass(el.value)">{{
      el.value }}
    </label>
  </main>
</template>

<style scoped>
.checked {
  opacity: 0.5;
}

input {
  position: absolute;
  z-index: 11;
  height: 16px;
  width: 16px;
  left: 10px;
}

label {
  display: flex;
  flex-direction: column;
  padding: 12px 24px 12px 32px;
  font-size: 22px;
  cursor: pointer;
  user-select: none;

  &:before {
    content: " ";
    z-index: 10;
    width: 18px;
    height: 18px;
    border: 1px solid rgb(37, 139, 255);
    background-color: white;
    position: absolute;
    border-radius: 25px;
    left: 12px;
  }
}
</style>