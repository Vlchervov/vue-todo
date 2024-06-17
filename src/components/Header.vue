<script>
</script>
<template>
    <header>
        <nav>
            <ul>
                <li>Список задач</li>
            </ul>
            <ul>
                <li>Выход</li>
            </ul>
        </nav>
    </header>
</template>

<style lang="css" scoped>
header {
    background-color: rgb(49, 49, 49);
    width: 100%;
    display: flex;
    border-radius: 12px 12px 0px 0px;
}

nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

ul {
    display: flex;
    margin: 0px;
    padding: 0px;
}

li {
    list-style: none;
    padding: 12px;
    color: white;
    cursor: pointer;
    margin: 0px;

    &:hover {
        color: red;
        transition: 0.3s ease;
    }
}
</style>