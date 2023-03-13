import { Link } from "react-router-dom";
import "./Message.scss";
import { FiChevronsRight } from "react-icons/fi";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> <FiChevronsRight /> Tope Daniel
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/46303140?v=4"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              non nobis, consectetur, odit nemo error repellat architecto
              voluptatibus quam dolores rerum corrupti harum molestiae iste ea
              mollitia facere nisi ex.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/46303140?v=4"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              non nobis, consectetur, odit nemo error repellat architecto
              voluptatibus quam dolores rerum corrupti harum molestiae iste ea
              mollitia facere nisi ex.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/46303140?v=4"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              non nobis, consectetur, odit nemo error repellat architecto
              voluptatibus quam dolores rerum corrupti harum molestiae iste ea
              mollitia facere nisi ex.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/46303140?v=4"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              non nobis, consectetur, odit nemo error repellat architecto
              voluptatibus quam dolores rerum corrupti harum molestiae iste ea
              mollitia facere nisi ex.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
