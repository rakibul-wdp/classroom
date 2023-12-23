function getUsername(ticket,users){
    const id = ticket?.userId
    const res = users?.find(item=>item.id===id)
    console.log(res)
    if(res){
        return res
    }
    else{
        return ''
    }
    
}

const statusMap = {
    0: "Backlog",
    1: "Todo",
    2: "In progress",
    3: "Done",
    4: "Cancelled",
}

const priorityMap = {
    0 : 'No priority',
    1 : 'Low',
    2 : 'Medium',
    3 : 'High',
    4 : 'Urgent'

}
export {getUsername,statusMap,priorityMap}