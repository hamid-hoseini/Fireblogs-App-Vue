<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div v-if="profileAdmin" class="toggle-edit">
        <span>Toggle Editing Post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <BlogCard :post="post" v-for="(post, index) in blogPosts" :key="index" />
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
export default {
  name: "blogs",
  components: { BlogCard },
};
</script>

<style lang="scss" scoped></style>