<script>
    import { page } from "$app/stores"
    const { productId, reviewId} = $state($page.params)
</script>

<h1>Review {reviewId} for product {productId}</h1>