import Sortable from "sortablejs";

export const vDragable = {
    mounted(el, binding) { 
        const options = binding.value;
        for (let oi = 0; oi < options.length; oi++) {
            const o = options[oi]; 
            new Sortable(el.querySelector(o.selector), o.option);
        }
    },
};
