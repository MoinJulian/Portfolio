<script>
    import { onDestroy, onMount } from "svelte";

    export let words;
    let index = 0;
    let len = words[index].length;
    let grow = true;
    let id;
    onMount(() => {
        id = setInterval(() => {
            if (grow) {
                len++;
                if (len > words[index].length + 30) {
                    grow = false;
                    len = words[index].length;
                }
            } else {
                len--;
                if (len < -5) {
                    len = 0;
                    grow = true;
                    index++;
                    if (index >= words.length) {
                        index = 0;
                    }
                }
            }
        }, 90);
    });

    onDestroy(() => clearInterval(id));
</script>

<span>
    {words[index].substring(0, len)}
</span>