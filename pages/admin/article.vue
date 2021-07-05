<template>
    <Nuxt />
</template>

<script>
export default {
    middleware ({ route, redirect }) {
        if ( route.path == '/admin/article' ) {
            redirect('/admin/article/list')
        }
    }
}
</script>