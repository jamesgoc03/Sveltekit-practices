<script lang="ts">
    import type{ PageData } from "./$types";
    import type { Product } from "./+page.ts";

	let { data }: { data: PageData } = $props();
    const products: Product[] = $state(data.products);
</script>

<h1>{data.title}</h1>
{#each products as product}
    <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <hr>
    </div>
{/each}