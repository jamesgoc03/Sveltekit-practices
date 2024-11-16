<script>
    import { goto, beforeNavigate, afterNavigate } from "$app/navigation";

    const handleClick = () => {
        console.log("Pacing your order...");
        goto("/products", { replaceState: true });
    }

    beforeNavigate((navigation) => {
        console.log({ before: navigation })
    });

    afterNavigate((navigation) => {
        console.log({ after: navigation })
    });
</script>

<h1>Welcome home</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button onclick={handleClick}>Place order</button>