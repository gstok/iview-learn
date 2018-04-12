
<style>
        .area {
            position: fixed;
            width: 100%;
            height: 100%;
        }

    .ivu-layout {
        width: 100%;
        height: 100%;
    }
</style>


<template>
    <div class="area">
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>
