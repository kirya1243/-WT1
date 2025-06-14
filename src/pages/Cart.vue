<script setup>
import Header from '@/components/Header.vue'
import Navigation from '@/components/catalog/Navigation.vue'
import CartPage from '@/components/Cart/CartPage.vue'
import SubscribeBanner from '@/components/SubscribeBanner.vue'
import FooterBlock from '@/components/FooterBlock.vue'

import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

onMounted(() => {
  cartStore.getCart()
})
</script>

<template>
  <main>
    <div class="home">
      <Header />
      <Navigation
        :show-left="true"
        :show-right="false"
        left-text="SHOPPING CART"
      />
      <CartPage />
      <SubscribeBanner />
      <FooterBlock />
    </div>
  </main>
</template>