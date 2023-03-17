<template>
    <header>
        <img alt="logo" class="logo" src="/logoPlaceholder.png" width="125" height="125" />
        <img alt="logo" class="logo" src="/killjoycat.png" width="125" height="125" />
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/GettingInvolved">Get Involved</RouterLink>
            <RouterLink to="/FrequentQuestions">FAQ</RouterLink>
            <RouterLink to="/ContactUs">Contact Us</RouterLink>
        </nav>
    </header>
    <RouterView />
</template>



<style scoped>
header{
    display: flex;
    flex-direction: row;
}

nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Noto Sans', sans-serif;
    letter-spacing: 0.1rem;
    text-align: center;
}

/*active page*/
nav a.router-link-exact-active {
    color: white;
}

/*hovering over non-active buttons*/
nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    margin: 0.5rem;
    color: var(--celadonGreen);
    display: flex;
    justify-content: center;
    padding: 0 1rem;
    width: fit-content;
    white-space: nowrap;
}

nav a:first-of-type {
    border: 0;
}

img {
    margin: 1rem;
}
</style>