<script>
    import DarkModeToggler from "./DarkModeToggler.svelte";
  import Logo from "./Logo.svelte";
</script>

<header id="header">
    <DarkModeToggler />
    <h1>MoinJulian</h1>
    <Logo></Logo>
</header>

<style lang="scss">
    header {
        padding-top: 30px;
        text-align: center;
        height: 110px;
        position: relative;
        h1 {
            visibility: hidden;
            position: absolute;
            pointer-events: none;
        }
    }
</style>