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
            <Content>
                <Table ref="mytable" highlight-row @on-current-change="test" height="300" stripe border :columns="columns1" :data="data1"></Table>
                <Button @click="handleClearCurrentRow">Clear</Button>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </Layout>
</template>
<script>
    export default {
        name: "app",
        data () {
            return {
                columns1: [
                    {
                        title: '名称',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '日期',
                        key: 'date'
                    }
                ],
                data1: [
                    {
                        name: '顾世豪',
                        age: 25,
                        address: '浙江省杭州市萧山区',
                        date: '2018-01-04'
                    },
                    {
                        name: '顾世豪',
                        age: 25,
                        address: '浙江省杭州市萧山区',
                        date: '2018-01-04'
                    },
                    {
                        name: '顾世豪',
                        age: 25,
                        address: '浙江省杭州市萧山区',
                        date: '2018-01-04'
                    },
                    {
                        name: '顾世豪',
                        age: 25,
                        address: '浙江省杭州市萧山区',
                        date: '2018-01-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            test (curRow, oldRow) {
                console.log(curRow);
                console.log(oldRow);
            },
            handleClearCurrentRow () {
                this.$refs.mytable.clearCurrentRow();
            }
        }
    }
</script>
