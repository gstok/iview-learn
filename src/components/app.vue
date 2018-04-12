
<style>
    /* .box {
        border: solid 1px black;
    } */
</style>


<template>
    <div>
        <Row :gutter="16">
            <Col class="box" span="12">col-12</Col>
            <Col class="box" span="12">col-12</Col>
        </Row>
        <Row type="flex">
            <Col class="box" order="4" span="6">1</Col>
            <Col class="box" order="3" span="6">2</Col>
            <Col class="box" order="2" span="6">3</Col>
            <Col class="box" order="1" span="6">4</Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>
