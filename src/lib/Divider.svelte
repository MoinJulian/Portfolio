<script>
    export let color1 = "";
    export let color2 = "";
</script>

<div
    style="border-left: calc(100vw - 20px) solid {color1};
           border-bottom: 3vw solid {color2};
           transition: border-left-color 200ms linear,
           border-bottom-color 200ms linear;"
/>