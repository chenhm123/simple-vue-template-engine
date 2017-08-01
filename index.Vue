<template>
    <div :class="test" v-for="(item,index) in list">
        <span v-html="item.a"></span>
    </div>
</template>