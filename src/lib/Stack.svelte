<script>
    import Divider from "./Divider.svelte";

    let showNames = false;
    const logos = {
        frontend: [
            {
                image: "js-logo.png",
                name: "JavaScript",
                url: "https://developer.mozilla.org/de/docs/Web/JavaScript",
            },
            {
                image: "css-logo.png",
                name: "CSS",
                url: "https://developer.mozilla.org/de/docs/Web/CSS",
            },
            {
                image: "html-logo.png",
                name: "HTML",
                url: "https://developer.mozilla.org/de/docs/Web/HTML",
            },
            {
                image: "sass-logo.png",
                name: "Sass",
                url: "https://sass-lang.com",
            },
            {
                image: "svelte-logo.png",
                name: "Svelte",
                url: "https://svelte.dev/",
            },
        ],
        backend: [
            {
                image: "node-logo.png",
                name: "Node.js",
                url: "https://nodejs.org",
            },
            {
                image: "sveltekit-logo.png",
                name: "SvelteKit",
                url: "https://kit.svelte.dev/",
            },
            {
                image: "firebase-logo.png",
                name: "Firebase",
                url: "https://firebase.google.com/",
            },
        ],
        familiarwith: [
            {
                image: "typescript-logo.png",
                name: "TypeScript",
                url: "https://www.typescriptlang.org/",
            },
            {
                image: "java-logo.png",
                name: "Java",
                url: "https://www.java.com",
            },
            {
                image: "php-logo.png",
                name: "PHP",
                url: "https://www.php.net/",
            },
            {
                image: "python-logo.png",
                name: "Python",
                url: "https://www.python.org/",
            },
        ],
    };
</script>

<section>
    <h2>Stack</h2>
    <p class="love">I love to build stuff with Svelte!</p>
    {#each ["Frontend", "Backend", "Familiar with"] as category}
        <h3>{category}</h3>
        {@const key = category.replace(" ", "").toLowerCase()}
        <div class="logos">
            {#each logos[key] as { image, name, url }}
                {#if showNames}
                    <a href={url} target="_blank" rel="noreferrer"> {name}</a>
                {:else}
                    <a href={url} target="_blank" rel="noreferrer">
                        <img
                            src="/assets/logos/{image}"
                            alt="{name} logo"
                            title={name}
                        /></a
                    >
                {/if}
            {/each}
        </div>
    {/each}

    <div class="centered">
        <button on:click={() => (showNames = !showNames)}
            ><small
                >{#if showNames}
                    Show icons
                {:else}
                    Show names
                {/if}</small
            ></button
        >
    </div>
</section>

<Divider color1="var(--card-color)" color2="var(--bg-color)" />

<style lang="scss">
    section {
        background-color: var(--card-color);
        transition: background-color 200ms linear;
        padding-inline: 15px;
        text-align: center;
        h3 {
            color: var(--tertiary-color);
        }
        .love {
            padding-bottom: 30px;
            font-style: italic;
        }
        .logos {
            padding: 20px 0px 25px 0px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px;
            img {
                width: 30px;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
        button {
            color: var(--tertiary-color);
        }
    }
</style>