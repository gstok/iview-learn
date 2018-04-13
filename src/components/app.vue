<style scoped>
    .area {
        position: fixed;
        width: 100%;
        height: 100%;
    }

    .title {
        width: 100%;
        height: 64px;
        font-size: 24px;
        text-align: center;
        color: white;
        line-height: 64px;
        background-color: #45528e;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title > span {
        font-size: 14px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .menu-area {
        background-color: #2b2f47;
        height: 100%;
    }
    
    .menu {
        background-color: #2b2f47;
        font-size: 14px;
        font-weight: bold;
        color: #7b8299;
    }

    .my-header {
        background-color: white;
    }
</style>
<template>
    <Layout class="area">
        <Sider class="menu-area" hide-trigger>
            <div class="title">
                <span>DATA</span>
                <img src='../assets/icons/dcrm.png'></img>
                <span>GEEK</span>
            </div>
            <Menu class="menu" active-name="1-2" theme="light" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        首页
                    </template>
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        客户
                    </template>
                    <MenuItem name="2-1">Option 1</MenuItem>
                    <MenuItem name="2-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        触达
                    </template>
                    <MenuItem name="3-1">Option 1</MenuItem>
                    <MenuItem name="3-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="4">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        分析
                    </template>
                    <MenuItem name="4-1">Option 1</MenuItem>
                    <MenuItem name="4-2">Option 2</MenuItem>
                </Submenu>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        设置
                    </template>
                    <MenuItem name="5-1">Option 1</MenuItem>
                    <MenuItem name="5-2">Option 2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <Layout>
            <Header class="my-header">Header</Header>
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
