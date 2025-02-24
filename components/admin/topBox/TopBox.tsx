
import "./topbox.scss"
// import { topDealUsers } from "../../data";
const topDealUsers = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.256"
    },

    {
        id: 3,
        img: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Brent Reeves",
        email: "brent@gmail.com",
        amount: "2.998"
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.998"
    },
]
const TopBox = () => {
    return (
        <div className="topBox">
            <h1>Top Deals</h1>
            <div className="list">
                {
                    topDealUsers.map(user => (
                        <div className="listItem" key={user.id}>
                            <div className="user">
                                <img src={user.img} alt="" />
                                <div className="userTexts">
                                    <span className="username">{user.username}</span>
                                    <span className="email">{user.email}</span>
                                </div>

                            </div>
                            <span className="amount">AED{user.amount}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopBox