<template>
<td class="hover:underline">
    <a :href="url" target="_blank">{{ name }}</a>
</td>
</template>

<script>
export default {
    name: "Link",
    props: ['url','name']
}
</script>