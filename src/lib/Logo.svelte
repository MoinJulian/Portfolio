<img src="/assets/MoinJulian.png" alt="">

<style lang="scss">
    img {
        width: 80px;
        border-radius: 50%;
        animation: fade 900ms ease-out forwards;
        transform: scale(0);
        opacity: 0;
        border: 1px solid var(--icon-border);
    }
    @keyframes blink {
        0%,
        16%,
        18% {
            transform: scaleY(1);
        }
        17% {
            transform: scaleY(0);
        }
    }

    @keyframes fade {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        60% {
            opacity: 1;
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>