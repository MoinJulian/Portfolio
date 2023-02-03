<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import Fa from "svelte-fa";
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

    let show = false;
    let timer = null;
    let scrollPos = 0;

    onMount(() => {
        scrollPos = window.scrollY;
        window.addEventListener("scroll", () => {
            if (window.scrollY == 0) {
                show = false;
            } else if (window.scrollY < scrollPos) {
                scrollPos = window.scrollY;
                if (timer) clearTimeout(timer);
                show = true;
                timer = setTimeout(() => {
                    show = false;
                }, 3000);
            }
            scrollPos = window.scrollY;
        });
    });
</script>

{#if show}
    <a
        transition:fade={{ duration: 150 }}
        href="#header"
        aria-label="scroll up"
    >
        <Fa icon={faAngleUp} />
    </a>
{/if}

<style lang="scss">
    a {
        position: fixed;
        bottom: 12px;
        right: 12px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #444c;
        text-align: center;
        color: white;
        line-height: 32px;
    }
</style>