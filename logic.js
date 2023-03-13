const items= document.querySelectorAll(".itme");
const sortablelist=document.querySelector(".sortable-list");

items.forEach((item)=>{
    item.addEventListener("dragstart", ()=>{
       
        setTimeout(()=> item.classList.add("dragging"), 0);
       
    })
    item.addEventListener("dragend", ()=> item.classList.remove("dragging"));
})

const initSortableList = (e)=>{
    const draggingItem = sortablelist.querySelector(".dragging");
    const sibling = [...sortablelist.querySelectorAll(".item:not(.dragging)")]
    let nextSibling =sibling.find(sibling =>{
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight /2;
    });
    sortablelist.insertBefore(draggingItem, nextSibling)


}
sortablelist.addEventListener("dragover", initSortableList);

