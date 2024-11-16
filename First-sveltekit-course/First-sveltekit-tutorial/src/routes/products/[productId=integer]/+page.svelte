<script>
    import { page } from "$app/stores"
    const productId = $state($page.params.productId)
</script>

<h1>Details about product {productId}</h1>
