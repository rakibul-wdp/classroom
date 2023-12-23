import axios from "axios"
const UseAPI = async()=>{
    let res = await axios.get('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers')
    res = res.data
    return res
}
export default UseAPI