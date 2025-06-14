<script setup>
import { ref, onMounted } from 'vue';
import { getHomeProducts } from '@/services/homeService';

import Header from '@/components/Header.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import CategoriesSection from '@/components/CategoriesSection.vue';
import FeaturedItems from '@/components/FeaturedItems.vue';
import InfoBanner from '@/components/InfoBanner.vue';
import SubscribeBanner from '@/components/SubscribeBanner.vue';
import FooterBlock from '@/components/FooterBlock.vue';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await getHomeProducts();
    products.value = response.data;
  } catch (error) {
    console.error('Failed to load home products:', error);
  }
});
</script>

<template>
  <main>
    <div class="home">
      <Header />
      <HeroBanner />
      <section>
        <div class="container">
          <CategoriesSection />
        </div>
      </section>
      <FeaturedItems
        :products="products"
        :show-header="true"
        title="Featured Items"
        subtitle="Shop for items based on what we featured this week"
        :show-footer="true"
        footer-button-text="Browse All Products"
      />
      <InfoBanner />
      <SubscribeBanner />
      <FooterBlock />
    </div>
  </main>
</template>