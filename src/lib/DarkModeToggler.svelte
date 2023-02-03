<script>
    let darkMode = true;
    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle("light");
    }
    import Fa from "svelte-fa";
    import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
</script>

<button
    aria-label="toggle dark mode"
    title={darkMode ? "switch to light mode" : "switch to dark mode"}
    on:click={toggleDarkMode}
>
    <Fa icon={darkMode ? faSun : faMoon} />
</button>

<style>
    button {
        position: absolute;
        top: 10px;
        right: 15px;
    }
</style>