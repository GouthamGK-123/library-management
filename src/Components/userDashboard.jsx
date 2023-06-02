import '../Styles/userDashboard.css'
const UserDashboard = () => {
    return ( 
        <div className="userDashboard">
            <div className="userDash">
                <img src="../images/adminDash1.jpg" alt="" />
            </div>
            <div className="tag">
                <div className="Hoopla">
                    <h1>Heritage in Learning </h1>
                </div>
                <div className="wed">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit distinctio porro quaerat sequi voluptatem tempore ea at voluptas. Quod illo, ipsam cum officiis hic est animi ducimus nam pariatur dolorem. Eius quibusdam unde consequuntur iure?</p>
                </div>
                <div className="Mark">
                    <button>Mark Your Calender <span>-</span></button>
                </div>
            </div>
            <div className="lab">
                <div className="learning">
                    <h1>Learning Lab</h1>
                </div>
                <div className="technology">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque rem excepturi similique nemo! Vel, a quas. Non vitae id veniam consectetur sequi, maiores distinctio voluptas quae reiciendis deserunt dolores eveniet aliquam aut incidunt earum, vero a fuga nostrum ipsa!</p>
                </div>
            </div>
            
                <div className="over">
                    <img src="../images/LinkedInLearning.jpg" alt="" />
                </div>
                <div className="linkedin">
                <div className="LEARN">
                    <label htmlFor="">LEARN</label>
                    </div>
                    <div className="lynda">
                    <h1>Digital Librabry</h1>
                    </div>
                <div className="intrests">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea facilis id deleniti esse laboriosam necessitatibus debitis vel hic placeat nulla est eligendi voluptatum nobis rem voluptatibus possimus maxime sequi ipsa, facere provident iste minima?</p>
                </div>
                <div className="started">
                    <button>Get Started -</button>
                </div>
                </div>
                <div className="Nee">
                    <img src="../images/Screenshot.png" alt="" />
                </div>
                <div className="New">
                    <div className="Help">
                        <h1>Learn Something New or Get Tech Help</h1>
                        <h4>Register on the online calendar. For more information call (203) 622-7920.</h4>
                        <div className="View">
                            <button>view Calender -</button>
                        </div>
                    </div>
                </div>
            
        </div>
     );
}
 
export default UserDashboard;