<template>
    <Nuxt />
</template>

<script>
export default {
    middleware ({ route, redirect }) {
        if ( route.path == '/admin/system' ) {
            redirect('/admin/system/info')
        }
    }
}
</script>