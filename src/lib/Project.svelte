<script>
    export let project;
    import Fa from "svelte-fa";
    import {
        faYoutube,
        faGithub,
    } from "@fortawesome/free-brands-svg-icons";
    import { faDisplay } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="item">
    <article class="content">
        <h3>{project.name}</h3>

        {#if project.image}
            <picture>
                <source
                    srcset="assets/projects/{project.image}.webp"
                    type="image/webp"
                />
                <source
                    srcset="assets/projects/{project.image}.jpg"
                    type="image/jpeg"
                />
                <img
                    src="assets/projects/{project.image}.jpg"
                    alt="project preview"
                />
            </picture>
        {/if}

        <p class="description">{@html project.description}</p>

        <p class="links">
            {#if project.url}
                <a href={project.url} target="_blank" rel="noreferrer" title="Demo">
                    <Fa icon={faDisplay} />
                </a>
            {/if}
            {#if project.repo}
                <a
                    href={project.repo}
                    target="_blank" rel="noreferrer"
                    title="GitHub Repository"
                >
                    <Fa icon={faGithub} />
                </a>
            {/if}
            {#if project.tutorial}
                <a
                    href={project.tutorial}
                    target="_blank" rel="noreferrer"
                    title="Tutorial"
                >
                    <Fa icon={faYoutube} />
                </a>
            {/if}
        </p>

        <p class="keywords">
            {#each project.keywords.sort() as keyword}
                <span class="keyword">{keyword}</span>
            {/each}
        </p>
    </article>
</div>

<style lang="scss">
    .item {
        background-color: var(--card-color);
        box-shadow: 0px 0px 20px var(--card-border);
        transition: background-color 200ms linear;
        border-radius: 14px;
        article {
            padding: 20px;
            h3 {
                font-size: 32px;
                color: var(--secondary-color);
                text-align: center;
            }
            img {
                width: 100%;
                margin-top: 25px;
                border-radius: 10px;
                box-shadow: 0px 0px 20px #0003;
            }
            .description {
                margin: 16px 0px;
                font-size: 16px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                line-height: 1.5;
            }
            .keywords {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 20px;
                font-family: consolas, mono-space;
                .keyword {
                    background-color: var(--primary-color);
                    color: white;
                    padding: 3px 8px;
                    border-radius: 6px;
                    font-size: 14px;
                }
            }
            .links {
                display: flex;
                gap: 16px;
                font-size: 22px;
                a {
                    color: var(--secondary-color);
                    &:hover,
                    &:focus-visible {
                        color: var(--primary-color);
                    }
                }
            }
        }
    }
</style>