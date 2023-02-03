<script>
    import TypeWriter from "./TypeWriter.svelte";
    import Divider from "./Divider.svelte";
</script>

<section>
    <h2>Welcome</h2>
    <p class="greet">
        Hi, I am Julian! I am a <TypeWriter
            words={[
                "web developer.",
                "golfer.",
                "content creator.",
                "drummer :-)",
            ]}
        />
    </p>
    <p>
        My personal projects can be found on
        <a href="https://github.com/MoinJulian/" target="_blank" rel="noreferrer"
            >GitHub</a
        >, a selection of which can be found
        <a href="#portfolio">below</a>.
    </p>

    <p>
        Under the name
        <strong>MoinJulian</strong>
        I create coding tutorials on
        <a
            href="https://www.youtube.com/@moinjulian"
            target="_blank" rel="noreferrer">YouTube</a
        >
        in German.
    </p>
</section>

<Divider color1="var(--bg-color)" color2="var(--card-color)" />

<style lang="scss">
    section {
        max-width: 720px;
        margin-inline: auto;
        font-size: 20px;
        line-height: 1.5;
        padding-inline: 15px;
    }

    p {
        padding-block: 8px;
    }
    .greet {
        color: var(--tertiary-color);
        @media (max-width: 420px) {
            height: 62px;
            padding-bottom: 0;
        }
    }
    a {
        color: var(--tertiary-color);
        &:focus-visible,
        &:hover {
            color: var(--secondary-color);
        }
    }
</style>