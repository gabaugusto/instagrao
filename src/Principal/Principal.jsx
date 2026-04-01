import './Principal.css';
import thominho from '../assets/thominho.jpg'
import post0001 from '../assets/post0001.jpg'
import post0002 from '../assets/post0002.jpg'

import Post from './Post'

export default function Principal() {
    return (
        <div className='Principal'>
            <div className='Stories'>
                <p>Stories</p>
            </div>
            <div className='Feed'>
                {
                    // Posts 
                }
                <Post 
                    profileImage={thominho}
                    username="Thominho"
                    time="2 horas atrás"
                    postImage={post0001}
                    likes={100}
                    caption="Curtindo a vida!"
                 />

                <Post 
                    profileImage={thominho}
                    username="BB_viagens"
                    time="4 horas atrás"
                    postImage={post0002}
                    likes={1}
                    caption="O Bolo de Hoje!"
                 />

                <div className="Post">
                    <div className="post_header">
                        <img src={thominho} alt="Profile" />
                        <span>Thominho</span>
                        <span className="time">2 horas atrás</span>
                    </div>
                    <div className="post_image">
                        <img src={post0001} alt="Post" />
                    </div>
                    <div className="post_footer">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Share</button>
                        <button>Save</button>
                    </div>
                    <div className="post_likes">
                        <span>100 likes</span>
                    </div>
                    <div className="post_caption">
                        <span><strong>Thominho</strong> Curtindo a vida!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}