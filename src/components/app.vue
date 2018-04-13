<style scoped>
    .area {
        position: fixed;
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <Layout class="area">
        <Sider hide-trigger>Sider</Sider>
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
</template>
<script>
    export default {
        name: "app"
    }
</script>
