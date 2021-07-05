<template>
    <Nuxt />
</template>

<script>
export default {
    middleware ({ route, redirect }) {
        if ( route.path == '/admin/note' ) {
            redirect('/admin/note/list')
        }
    }
}
</script>