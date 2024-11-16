<script lang="ts">
    const {productId = 100}: {productId: number} = $props();
</script>

<a href="/">Home</a>

<h2>Products list</h2>
<h3><a href="/products/1">Product 1</a></h3>
<h3><a href="/products/2">Product 2</a></h3>
<h3><a href="/products/3">Product 3</a></h3>
<h3><a href={`/products/${productId}`}>Product {productId}</a></h3>
