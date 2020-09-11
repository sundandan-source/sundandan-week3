<template>
<div id="app">
    <div id="nav">
        <router-link to="/home">关注</router-link>
        <router-link to="/about">发现</router-link>
        <router-link to="/tc">同城</router-link>
    </div>
    <router-view />
</div>
</template>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    list-style: none;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {

    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
