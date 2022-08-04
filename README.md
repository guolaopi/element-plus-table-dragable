# element-plus-table-dragable
A directive what used sortablejs to add drag support for element-plus's table component base on vue3.

# Useage
```javascript
<template>
    <el-table 
        v-dragable="dragOptions" 
        :data="data"
    >
    </el-table>
</template>

<script setup>
import { vDragable } from "element-plus-table-dragable"; 

const dragOptions = [
    {
        selector: "thead tr", // add drag support for column
        option: { // sortablejs's option
            animation: 150,
            onEnd: (evt) => {
                /* you can define a 'columns' ref 
                and use v-for render it in table's slot. 
                then you can change index of the item in 'column' here 
                to implement drag column to sort */
                console.log(evt.oldIndex, evt.newIndex);
            },
        },
    },
    {
        selector: "tbody", // add drag support for row
        option: { // sortablejs's option
            animation: 150,
            onEnd: (evt) => {
                console.log(evt.oldIndex, evt.newIndex);
            },
        },
    },
];
</script> 
```

here is the demo link: [element-plus-table-dragable-demo](https://guolaopi.github.io/element-plus-table-dragable-demo)
